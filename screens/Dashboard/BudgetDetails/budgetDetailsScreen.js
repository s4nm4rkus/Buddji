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
} from "react-native";

import { PieChart } from "react-native-chart-kit";
import { Svg, Circle } from "react-native-svg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Adjust path if needed
import { auth } from "../../../firebaseConfig";
import { query, where } from "firebase/firestore";
import { useRoute } from "@react-navigation/native";

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
      setLoading(true); // ✅ Start loading before fetching data

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
            name: "Transport",
            population: Number(fetchedBudget.transport),
            color: "#36A2EB",
          },
          {
            name: "Wants",
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
        setLoading(false); // ✅ Stop loading after fetching
      }
    };

    fetchBudgetData();
  }, [budgetId]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.dashboardContainer}>
        <View style={styles.dashboardContainer}>
          <StatusBar style="auto" />
          <Header navigation={navigation} />
          <Text style={styles.title}>{budget.budgetTitle}</Text>
          <View style={styles.budgetListContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : budgetData.length === 0 ? (
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                No budget data available.
              </Text>
            ) : (
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
                    hasLegend={false} // Removed side legends
                    absolute
                  />

                  {/* Centered white circle */}
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

                  {/* Centered Total Budget Text */}
                  <View
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      justifyContent: "center",
                      alignContent: "center",
                      transform: [{ translateX: -53 }, { translateY: -10 }],
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "InBold",
                      }}
                    >
                      {new Intl.NumberFormat("en-PH", {
                        style: "currency",
                        currency: "PHP",
                      }).format(budget.totalBudget)}
                    </Text>
                  </View>
                </View>

                {/* Custom Legends BELOW the Pie Chart */}
                <View style={{ marginTop: 20 }}>
                  {budgetData.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 5,
                      }}
                    >
                      <View
                        style={{
                          width: 15,
                          height: 15,
                          backgroundColor: item.color,
                          marginRight: 10,
                          borderRadius: 3,
                        }}
                      />
                      <Text style={{ fontSize: 14 }}>
                        {item.name} -{" "}
                        {new Intl.NumberFormat("en-PH", {
                          style: "currency",
                          currency: "PHP",
                        }).format(item.population)}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* Additional Budget Details */}
                <Text style={styles.detail}>
                  Budget Type: {budget.budgetType}
                </Text>
                <Text style={styles.detail}>
                  Start Date: {budget.startBudgetDuration}
                </Text>
                <Text style={styles.detail}>
                  End Date: {budget.endBudgetDuration}
                </Text>
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.buttonText}>Delete budget</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BudgetDetailsScreen;
