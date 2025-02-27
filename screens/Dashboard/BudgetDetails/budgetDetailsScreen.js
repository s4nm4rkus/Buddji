import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";

import { PieChart } from "react-native-chart-kit";
import { Svg, Circle } from "react-native-svg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { deleteDoc } from "firebase/firestore";

import Header from "./header/header";
import styles from "./budgetdetails.style";

const screenWidth = Dimensions.get("window").width;

const BudgetDetailsScreen = ({ navigation, route }) => {
  const { budgetId, budget } = route.params;
  const [selectedBudgetId, setSelectedBudgetId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    if (!budgetId) return;

    const fetchBudgetData = async () => {
      setLoading(true);

      try {
        const budgetRef = doc(db, "budgets", budgetId);
        const budgetSnap = await getDoc(budgetRef);

        if (!budgetSnap.exists()) {
          console.log("No budget found for ID:", budgetId);
          setBudgetData([]);
          return;
        }

        const fetchedBudget = budgetSnap.data();
        console.log("🔥 Firestore Data Fetched:", fetchedBudget);

        const transformedData = [
          {
            name: "Food",
            population: Number(fetchedBudget.food),
            color: "#FF6384",
          },
          {
            name: "Transportaion",
            population: Number(fetchedBudget.transport),
            color: "#36A2EB",
          },
          {
            name: "Wants and Needs",
            population: Number(fetchedBudget.wants),
            color: "#FFCE56",
          },
          {
            name: "Savings",
            population: Number(fetchedBudget.savings),
            color: "#4BC0C0",
          },
        ].filter((item) => item.population > 0);

        console.log("✅ Transformed Data:", transformedData);
        setBudgetData(transformedData);
        setSelectedBudgetId(budgetId);
      } catch (error) {
        console.error("❌ Error fetching budget data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBudgetData();
  }, [budgetId]);

  const handleDelete = async () => {
    if (!budgetId) return;

    try {
      // Show confirmation alert
      Alert.alert(
        "Delete Budget",
        "Are you sure you want to delete this budget?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: async () => {
              // Delete from Firestore
              await deleteDoc(doc(db, "budgets", budgetId));
              console.log(`🗑️ Budget with ID ${budgetId} deleted.`);

              // Navigate back to previous screen
              navigation.navigate("HomeScreen");
            },
          },
        ]
      );
    } catch (error) {
      console.error("❌ Error deleting budget:", error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.dashboardContainer}>
        <View style={styles.dashboardContainer}>
          <StatusBar style="auto" />
          <Header navigation={navigation} />
          <Text style={styles.title}>Budget details</Text>

          <View style={styles.budgetListContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : budgetData.length === 0 ? (
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                No budget data available.
              </Text>
            ) : (
              <ScrollView>
                <View style={styles.graphContainer}>
                  <View
                    style={{
                      position: "relative",
                      justifyContent: "center",
                      alignContent: "center",
                      backgroundColor: "#fff",
                      width: 200,
                      height: 200,
                      shadowColor: "rgba(0, 0, 0, 0.9)",
                      borderRadius: 125,
                      elevation: 5,
                    }}
                  >
                    <PieChart
                      style={styles.pie}
                      data={budgetData.map((item) => ({
                        name: item.name,
                        population: item.population,
                        color: item.color,
                      }))}
                      width={screenWidth - -40}
                      height={250}
                      chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      }}
                      accessor="population"
                      backgroundColor="transparent"
                      hasLegend={false}
                      absolute
                    />

                    <Svg
                      width="200"
                      height="200"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translateX: -100 }, { translateY: -100 }],
                      }}
                    >
                      <Circle cx="100" cy="100" r="80" fill="white" />
                    </Svg>

                    <View
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "48%",
                        justifyContent: "center",
                        alignContent: "center",
                        textAlign: "center",
                        transform: [{ translateX: -50 }, { translateY: -5 }],
                      }}
                    >
                      <Text style={styles.budgeTitlePie}>
                        {budget.budgetTitle}
                      </Text>

                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "InBold",
                          textAlign: "center",
                        }}
                      >
                        {new Intl.NumberFormat("en-PH", {
                          style: "currency",
                          currency: "PHP",
                        }).format(budget.totalBudget)}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: 20,
                      width: "100%",
                      paddingBottom: 5,
                      marginBottom: 5,
                      borderBottomWidth: 0.4,
                    }}
                  >
                    <Text
                      style={[
                        styles.budgeTitlePie,
                        {
                          fontSize: 13,
                          fontFamily: "InRegular",
                          textAlign: "center",
                          marginBottom: 25,
                        },
                      ]}
                    >
                      {budget.budgetType} | {budget.startBudgetDuration} to {""}
                      {budget.endBudgetDuration}
                    </Text>
                    {budgetData.map((item, index) => (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 15,
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            width: 12,
                            height: 12,
                            backgroundColor: item.color,
                            marginRight: 10,
                            borderRadius: 100,
                          }}
                        />
                        <View
                          style={{
                            width: "100%",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            paddingRight: 25,
                          }}
                        >
                          <Text
                            style={{ fontSize: 14, fontFamily: "InRegular" }}
                          >
                            {item.name}
                          </Text>
                          <Text
                            style={{ fontSize: 14, fontFamily: "InRegular" }}
                          >
                            {new Intl.NumberFormat("en-PH", {
                              style: "currency",
                              currency: "PHP",
                            }).format(item.population)}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>

                  <Text
                    style={[
                      styles.detail,
                      { textAlign: "left", fontFamily: "InSemiBold" },
                    ]}
                  >
                    Notes
                  </Text>
                  <View
                    style={{
                      width: "100%",
                      backgroundColor: "#eee",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 4,
                    }}
                  >
                    <Text style={styles.detail}>{budget.note}.</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleDelete}
                  >
                    <Text style={styles.buttonText}>Delete budget</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BudgetDetailsScreen;
