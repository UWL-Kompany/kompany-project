import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { Link, useHistory } from "react-router-dom";
import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";
import logo_big from "../Assets/Images/logo-big.png";
import axios from "axios";

const Register = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const dispatch = useDispatch();
  const [genData, setGenData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  let data = [
    {
      date: "01/01/2021",
      orderNo: "5641065",
      total: "71.99",
      items: [
        {
          name: "A Clone Trooper",
          id: 0,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "The Infinity Gauntlet",
          id: 1,
          price: "30.00",
          count: 0,
          description: "",
        },
      ],
    },
    {
      date: "01/01/2021",
      orderNo: "5641065",
      total: "71.99",
      items: [
        {
          name: "The Tumbler",
          id: 6,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "Iron Man MKLXXXV",
          id: 7,
          price: "30.00",
          count: 0,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "Captain America's Shield",
          id: 8,
          price: "30.00",
          count: 0,
          description: "",
        },
        { name: "Grogu", id: 9, price: "30.00", count: 0, description: "" },
      ],
    },
    {
      date: "01/01/2021",
      orderNo: "5641065",
      total: "71.99",
      items: [
        {
          name: "Stormbreaker",
          id: 2,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "Just Cause Grapple",
          id: 3,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "A Lightsaber",
          id: 4,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "The Dark Knight Suit",
          id: 5,
          price: "30.00",
          count: 0,
          description: "",
        },
      ],
    },
  ];

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = useCallback(() => {
    // Send GET request to 'courses/all'

    axios
      .get("http://localhost:4001/order/single", { params: { id: "1541235" } })
      .then((response) => {
        // set product state
        fetchOrderDetails(response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  const fetchOrderDetails = useCallback((ords) => {
    // Send GET request to 'courses/all'
    let ordNums = ords.map((ord) => ord.id);
    console.log("trying to fetch order details");
    axios
      .get("http://localhost:4001/orderProducts/all_group", {
        params: { data: ordNums },
      })
      .then((response) => {
        // set product state
        //console.log(response.data);
        fetchProductDetails(ords, response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  const fetchProductDetails = useCallback((ords, ordDetails) => {
    // Send GET request to 'courses/all'
    console.log("trying to fetch product details");
    let prodNums = ordDetails.map((ord) => ord.productId);
    axios
      .get("http://localhost:4001/product/all_group", {
        params: { data: prodNums },
      })
      .then((response) => {
        // set product state
        // console.log(response.data);
        createOrderData(ords, ordDetails, response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  const createOrderData = (ords, ordDetails, prodDetails) => {
    let tempData = [];
    console.log("trying to fetch sort orders");

    ords.forEach((ord) => {
      let items = [];
      let total = 0;
      ordDetails.forEach((pro) => {
        console.log("Getting here 1");
        if (pro.orderId === ord.id) {
          let item = {};
          console.log(pro.productId);
          console.log(JSON.stringify(prodDetails));
          item = prodDetails.filter(
            (prod) => prod.id.toString() === pro.productId.toString()
            // (prod) =>
            //   console.log(
            //     pro.productId +
            //       " : " +
            //       prod.id +
            //       " = " +
            //       (prod.id.toString() === pro.productId.toString())
            //   )
          )[0];
          console.log("Getting here 1.2");
          console.log(JSON.stringify(item));
          item.quantity = pro.quantity;
          console.log("Getting here 1.21");
          item.price = pro.price;
          total += item.quantity * item.price;
          items.push(item);
        }
      });
      let tempOrd = {
        date: ord.order_date,
        orderNo: ord.id,
        total: total,
        items: items,
      };
      tempData.push(tempOrd);
    });
    console.log("Getting here 4");
    console.log(JSON.stringify(tempData));
    setOrderData(tempData);
    //console.log(JSON.stringify(tempData));
  };

  function ProductList({ products }) {
    // component to display mapped requirements
    let trimedProducts = products.slice(0, 3);
    const listItems = trimedProducts.map((item) => (
      <div class="flex flex-col w-full items-center">
        <img class="h-40 w-40" src={item.imageUrl} />
        <div class="flex flex-col">
          <b>{item.name}</b>
          <b class="text-yellow-600">£{item.price}</b>
        </div>
      </div>
    ));

    return (
      <div
        class={"grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"}
      >
        {listItems}
      </div>
    ); // return all list items in a unordered list
  }

  function OrderList() {
    // component to display mapped requirements
    if (orderData.length < 1) {
      return (
        <div class="flex flex-col border-2 border-gray-400 mb-5">NO ORDERS</div>
      );
    }
    const listItems = orderData.map((item) => (
      <div class="flex flex-col border-2 border-gray-400 mb-5">
        <div class="flex flex-row bg-gray-200 border-b-2 border-gray-400 justify-between">
          <div class="flex w-1/3 self-center pt-2 pb-2 border-r-2 border-gray-400 justify-center">
            {item.date}
          </div>
          <div class="flex flex-col items-start">
            <div class="flex-row">
              <a>Order No: </a>
              <a class="font-bold">{item.orderNo}</a>
            </div>
            <div class="flex-row">
              <a>Total: </a>
              <a class="font-bold">£{item.total}</a>
            </div>
          </div>
          <Link
            class="flex flex-col p-2 text-blue-600 font-bold text-right"
            to={{ pathname: "order", state: item }} // navigate to specified order
          >
            {"View Order Details >"}
          </Link>
        </div>
        <ProductList products={item.items} />
      </div>
    ));

    return <div class={"flex flex-col w-1/2"}>{listItems}</div>; // return all list items in a unordered list
  }

  const genOrderProductData = () => {
    let data = [];
    let count = 0;
    for (let i = 0; i < 17; i++) {
      let randCount = Math.floor(Math.random() * 6) + 1;
      for (let j = 0; j < randCount; j++) {
        let productId = Math.floor(Math.random() * 22);
        let quantity = Math.floor(Math.random() * 6) + 1;
        let price = Math.floor(Math.random() * 100);

        let item = {
          id: count++,
          orderId: i,
          productId: productId,
          quantity: quantity,
          price: price,
        };
        data.push(item);
      }
    }
    setGenData(data);
  };

  return (
    <div class="flex flex-col w-full content-center items-center">
      <div className="flex font-bold text-black text-4xl mb-4 text-right ">
        My Orders
      </div>
      {/* <button
        onClick={() => {
          genOrderProductData();
        }}
      >
        Generate
      </button>
      <div>{JSON.stringify(genData)}</div> */}
      <OrderList />
    </div>
  );
};

export default Register;
