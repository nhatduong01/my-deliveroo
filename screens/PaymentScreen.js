import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import {
  CardField,
  StripeProvider,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import React, { useState } from "react";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const API_URL = "http://localhost:3301";
const PaymentScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return [clientSecret, error];
  };
  const handlePayment = async () => {
    // navigation.navigate("PreparingOrder");
    if (!cardDetails?.complete || !email) {
      console.log(cardDetails);
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    try {
      const { clientSecret, error } = fetchPaymentIntentClientSecret();
      if (error) {
        console.log("Unable to process to payment");
      } else {
        const [paymentIntent, error] = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment Succesful ", paymentIntent);
        }
      }
    } catch (error) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView className="flex-1 items-center space-y-3 bg-white">
      <TouchableOpacity
        style={styles.goBackIcon}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ArrowLeftIcon color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        className="w-4/5 h-10 border rounded-md p-3"
      />
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "85%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
          setCardDetails(cardDetails);
        }}
      />
      <TouchableOpacity
        className="w-5/6 h-12 bg-[#00CCBB] rounded-md justify-center"
        onPress={handlePayment}
      >
        <Text className="text-center text-lg font-bold text-white">
          Pay Now
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PreparingOrder");
        }}
      >
        <Text className="text-center text-lg font-bold text-[#00CCBB] mt-2">
          Pay by Cash
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {},
  cardContainer: {
    height: 60,
    width: "100%",
  },
  goBackIcon: {
    position: "relative",
    right: 160,
    top: 10,
    marginBottom: 15,
  },
});

export default PaymentScreen;
