import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const cardTypes = ["Swiggy", "TataNeu", "SimplySave"];

const cashbackData = [
  {
    category: "Apparels",
    mccCodes: [
      5137, 5139, 5611, 5621, 5631, 5641, 5651, 5655, 5661, 5691, 5697, 5699,
      5948,
    ],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Department Store",
    mccCodes: [5200, 5300, 5311, 5331, 5949, 5973],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Electronics",
    mccCodes: [
      1731, 5045, 5046, 5065, 5099, 5722, 5732, 5734, 5946, 7372, 7622, 7623,
      7629, 7631,
    ],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Entertainment",
    mccCodes: [
      4411, 4899, 5193, 5992, 7032, 7033, 7333, 7832, 7911, 7922, 7929, 7933,
      7991, 7996, 7997,
    ],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Home Decor",
    mccCodes: [
      5198, 5211, 5231, 5251, 5712, 5713, 5714, 5718, 5719, 5950, 7641,
    ],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Pharmacies",
    mccCodes: [5122, 5912, 5975, 8042, 8043],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Personal Care",
    mccCodes: [5977, 7230, 7297, 7298],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Local Cabs",
    mccCodes: [4121, 4111, 5511, 5521, 7512],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Pet Stores & Supplies",
    mccCodes: [5192, 5733, 5735, 5941, 5942, 5945, 5995, 7829, 7941],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Discount Stores",
    mccCodes: [5399],
    Swiggycashback: 5,
    TataNeuCashback: 3,
    SimplySaveCashback: 2,
  },
  {
    category: "Swiggy",
    mccCodes: [],
    Swiggycashback: 10,
    TataNeuCashback: 4,
    SimplySaveCashback: 3,
  },
];

const Rewards = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | string>("");
  const [cashback, setCashback] = useState<number>(0);

  const handleCardSelect = (card: string) => {
    setSelectedCard(card);
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const cardImages: Record<(typeof cardTypes)[number], string> = {
    Swiggy: "/Swiggy_HDFC.png",
    TataNeu: "/TataNeu_HDFC.png",
    SimplySave: "/SimplySave_SBI.png",
  };
  
  useEffect(() => {
    if (amount && selectedCard && selectedCategory) {
      const categoryData = cashbackData.find(
        (data) => data.category === selectedCategory
      );
      if(categoryData){
      let cashbackPercentage = 0;
      if (selectedCard === "Swiggy") {
        cashbackPercentage = categoryData.Swiggycashback;
      } else if (selectedCard === "TataNeu") {
        cashbackPercentage = categoryData.TataNeuCashback;
      } else if (selectedCard === "SimplySave") {
        cashbackPercentage = categoryData.SimplySaveCashback;
      }
    
      setCashback((parseFloat(amount as string) * cashbackPercentage) / 100);
    }
  }
  }, [selectedCard, amount,selectedCategory]);

  return (
    <div className="container" style={{ backgroundColor: "#6b6d73" }}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-2">
        <div className="row px-2">
        {selectedCard && (
          <div className="col-md-3 text-center ">
            <img
              src={cardImages[selectedCard] || ""}
              alt={selectedCard}
              style={{ maxHeight: "400px", maxWidth: "800%" }}
            />
          </div>
        )}
      </div>
        </div>
        <div className="col-md-3">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedCard || "Select Card"}
            </button>
            <ul className="dropdown-menu">
              {cardTypes.map((card, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCardSelect(card)}
                  >
                    {card}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedCategory || "Select Category"}
            </button>
            <ul className="dropdown-menu">
              {cashbackData.map((data, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategorySelect(data.category)}
                  >
                    {data.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group" style={{ color: "#6b6d73" }}>
            <span
              className="input-group-text"
              style={{ color: "#fff", backgroundColor: "#6b6d73" }}
            >
              ₹
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Amount"
              value={amount}
              onChange={handleAmountChange}
              style={{
                backgroundColor: "#6b6d73",
              }}
            />
          </div>
        </div>
        <div className="col-md-1">
        <p className="text-white mt-3 px-5">
          ₹
          {amount && selectedCard && selectedCategory ? cashback.toFixed(2) : 0}{" "}
          Cashback{" "}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Rewards;
