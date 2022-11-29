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
    navigation.navigate("PreparingOrder");
    console.log("The secret key is: ", process.env.STRIPE_PUBLIC_KEY);
    // if (!cardDetails?.complete || !email) {
    //   Alert.alert("Please enter Complete card details and Email");
    //   return;
    // }
    // const billingDetails = {
    //   email: email,
    // };
    // try {
    //   const { clientSecret, error } = fetchPaymentIntentClientSecret();
    //   if (error) {
    //     console.log("Unable to process to payment");
    //   } else {
    //     const [paymentIntent, error] = await confirmPayment(clientSecret, {
    //       type: "Card",
    //       billingDetails: billingDetails,
    //     });
    //     if (error) {
    //       alert(`Payment Confirmation Error ${error.message}`);
    //     } else if (paymentIntent) {
    //       alert("Payment Successful");
    //       console.log("Payment Succesful ", paymentIntent);
    //     }
    //   }
    // } catch (error) {
    //   console.log(e);
    // }
  };
  return (
    <StripeProvider publishableKey={process.env.STRIPE_PUBLIC_KEY}>
      <SafeAreaView className="flex-1 items-center space-y-3">
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          className="w-4/5 h-10  border rounded-md p-3 mt-5"
        />
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={(cardDetails) => {
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
      </SafeAreaView>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  card: {},
  cardContainer: {
    height: 60,
    width: "100%",
  },
});

export default PaymentScreen;
