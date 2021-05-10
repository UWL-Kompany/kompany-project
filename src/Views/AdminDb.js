import React, { useEffect, useState, useCallback } from "react";
// import logo from "../Images/UWL-Logo.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ProductModal = ({
  currProduct,
  setCurrProduct,
  priceCheck,
  setProductModalVisible,
  saveProduct,
}) => (
  // the course modal component, allows th user to edit all key information for the course
  <div class="fixed z-10 inset-0 overflow-y-auto" key="modal1">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      key="modal2"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        key="modal3"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 " key="container0">
          <div class="sm:flex sm:items-start" key="container1">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                class="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div
              class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
              key="container2"
            >
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Editing product information
              </h3>
              <div className="flex flex-col" key="container3">
                <h2 className="font-bold text-xl">Product Name: </h2>
                <div class="inset-y-0 right-0 flex items-center">
                  <input
                    type="text"
                    class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
                    onChange={
                      (text) =>
                        setCurrProduct({
                          ...currProduct,
                          name: text.target.value,
                        }) // function called and passed params to update temp info
                    }
                    defaultValue={currProduct.name}
                  />
                </div>
                <h2 className="font-bold text-xl">Image URL: </h2>
                <div class="inset-y-0 right-0 flex items-center">
                  <input
                    type="text"
                    class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
                    onChange={
                      (text) =>
                        setCurrProduct({
                          ...currProduct,
                          imageUrl: text.target.value,
                        }) // function called and passed params to update temp info
                    }
                    defaultValue={currProduct.imageUrl}
                  />
                  <img class="h-20 ml-10" src={currProduct.imageUrl} />
                </div>
                <h2 className="font-bold text-xl">Description: </h2>
                <div class="inset-y-0 right-0 flex items-center">
                  <textarea
                    type="text"
                    class="flex h-20 resize-y focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-2 pr-2 sm:text-sm border-gray-200 rounded-md"
                    onChange={(text) =>
                      setCurrProduct({
                        ...currProduct,
                        description: text.target.value,
                      })
                    } // function called and passed params to update temp info}
                    defaultValue={currProduct.description}
                  />
                </div>
                <h2 className="font-bold text-xl">Price: </h2>
                <div
                  class="inset-y-0 right-0 flex items-center"
                  key="price-container"
                >
                  <input
                    type="text"
                    key="price"
                    id={"price"}
                    class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
                    onChange={(text) => priceCheck(text, "price")}
                    defaultValue={currProduct.price}
                    value={currProduct.price}
                    //autoFocus
                  />
                </div>
                <h2 className="font-bold text-xl">Supplier Price: </h2>
                <div class="inset-y-0 right-0 flex items-center">
                  <input
                    type="text"
                    key="sprice"
                    id={"sprice"}
                    class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
                    onChange={(text) => priceCheck(text, "next-stock")}
                    //defaultValue={currProduct.price}
                    //value={currProduct.price}
                  />
                </div>
                <h2 className="font-bold text-xl">Category: </h2>
                <div class="inset-y-0 right-0 flex items-center">
                  <input
                    type="text"
                    key="stock_level"
                    id={"stock_levele"}
                    class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
                    onChange={(text) =>
                      setCurrProduct({
                        ...currProduct,
                        category: text.target.value,
                      })
                    } // function called and passed params to update temp info}
                    defaultValue={currProduct.category}
                  />
                </div>
                <h2 className="font-bold text-xl">Stock Level: </h2>
                <div class="inset-y-0 right-0 flex items-center">
                  <input
                    type="text"
                    key="stock_level"
                    id={"stock_levele"}
                    class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
                    onChange={(text) => priceCheck(text, "stock")}
                    defaultValue={currProduct.stock}
                    value={currProduct.stock}
                  />
                </div>

                <h2 className="font-bold text-xl">Order?: </h2>
                <div class="inset-y-0 right-0 flex items-center">
                  <select
                    //defaultValue={courseInfo.courseDuration}
                    // onChange={(text) =>
                    //   updateTempCourseInfo(
                    //     // function called and passed params to update temp info
                    //     "courseDuration",
                    //     text.target.value
                    //   )
                    // }
                    class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => saveProduct()} // call function to save all temp data
          >
            Save
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setProductModalVisible(false)} // call function to close course modal without saving
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AdminDb = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const [products, setProducts] = useState([]);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [currProduct, setCurrProduct] = useState({});
  const [newProd, setNewProduct] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = useCallback(() => {
    // Send GET request to 'courses/all'
    axios
      .get("http://localhost:4001/product/all")
      .then((response) => {
        // set product state
        setProducts(response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  const nextProductId = () => {
    let newId = products[products.length - 1].id + 1;

    return newId;
  };

  const createProduct = async () => {
    let product = { ...currProduct };
    product.id = nextProductId();
    product.rating = 5;
    console.log(JSON.stringify(product));

    axios
      .post("http://localhost:4001/product/create", {
        // POST to insert new student into database
        data: product, // send data to insert
      })
      .then((res) => {
        // success
        console.log(res.data.message);
        //setSubmitted({ status: true, loading: false, error: false }); // set the state of submitted data
        fetchProducts();
      })
      .catch((error) => {
        // there was a problem
        console.log("ERROR");
        console.error(error);
        //setSubmitted({ status: false, loading: false, error: true }); // set the state of submitted data
      });
  };

  const updateProduct = async () => {
    let product = { ...currProduct };
    console.log(JSON.stringify(product));

    axios
      .put("http://localhost:4001/product/product_update", {
        // POST to insert new student into database
        data: product, // send data to insert
      })
      .then((res) => {
        // success
        console.log(res.data.message);
        //setSubmitted({ status: true, loading: false, error: false }); // set the state of submitted data
        fetchProducts();
      })
      .catch((error) => {
        // there was a problem
        console.log("ERROR");
        console.error(error);
        //setSubmitted({ status: false, loading: false, error: true }); // set the state of submitted data
      });
  };

  function Products() {
    // component to display mapped requirements
    if (products.length < 1) {
      return null;
    }
    const listItems = products.map((item) => (
      <tr class="border-t-2 border-black">
        <td class="justify-center items-center mt-1 mb-1">
          <div
            class="w-2/4 cursor-pointer self-center bg-primary p-1 rounded-xl ml-8 text-white"
            onClick={() => {
              setUpProductModal(item, false);
            }}
          >
            Edit
          </div>
        </td>
        <td class="">
          <img class="h-20 ml-10" src={item.imageUrl} />
        </td>

        <td class="">
          <b>{item.name}</b>
        </td>
        <td class="">
          <a>
            {item.description.substring(0, 50) +
              (item.description.length > 50 ? "..." : "")}
          </a>
        </td>
        <td class="">£{item.price}</td>
        <td class="">£{5.0}</td>
        <td>{item.id}</td>
        <td>{item.stock}</td>
        <td>Yes</td>
      </tr>
    ));

    return (
      <table class={"table-auto"}>
        <thead>
          <tr>
            <th class="w-1/12">Edit?</th>
            <th class="w-1/12">Picture</th>
            <th class="w-2/12">Name</th>
            <th class="w-2/12">Description</th>
            <th class="w-1/12">Price</th>
            <th class="w-1/12">Supplier Price</th>
            <th class="w-1/12">Item Number</th>
            <th class="w-1/12">Stock Level</th>
            <th class="w-1/12">Order?</th>
          </tr>
        </thead>
        <tbody class="">{listItems}</tbody>
      </table>
    ); // return all list items in a unordered list
  }

  const saveProduct = () => {
    // TODO save currently product to db
    if (newProd) {
      createProduct();
    } else {
      updateProduct();
    }

    setProductModalVisible(false);
  };

  const setUpProductModal = (prod, status) => {
    let tempProd = { ...prod };
    setNewProduct(status);
    setCurrProduct(tempProd);
    setProductModalVisible(true);
  };

  const priceCheck = useCallback((e, item) => {
    const re = /^[0-9\b]+$/;
    let tempProd = { ...currProduct };
    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      tempProd[item] = e.target.value;
      setCurrProduct(tempProd);
    }
  });

  return (
    <>
      <div
        class="flex flex-col h-full w-full content-center items-center pb-60"
        key="main"
      >
        {productModalVisible && (
          <ProductModal
            key="top"
            currProduct={currProduct}
            setCurrProduct={setCurrProduct}
            priceCheck={priceCheck}
            setProductModalVisible={setProductModalVisible}
            saveProduct={saveProduct}
          />
        )}
        <div className="flex font-bold text-black text-4xl mb-4 text-right ">
          Database
        </div>
        <div
          class="w-1/6 cursor-pointer self-start bg-primary p-1 rounded-xl ml-10 mb-5 text-white"
          onClick={() => {
            setUpProductModal({}, true);
          }}
        >
          Add New Product
        </div>
        <Products />
      </div>
    </>
  );
};

export default AdminDb;
