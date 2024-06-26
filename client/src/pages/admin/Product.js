import React, { useEffect, useState } from "react";
import Navbar from "../admin/layout/Navbar";
import { NavLink } from "react-router-dom";
import Sidebar from "../admin/layout/Sidebar";
import { DeleteModal } from "./layout/Modal";
import { toast } from "react-toastify";
import { useItemData } from "../../store/ProductData";
import axios from "axios";

const Product = () => {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isDarkMode, setDarkMode] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const { item, setItem } = useItemData();
  const [itemId, setItemId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  //insert data
  const [insertItem, setInsertItem] = useState({
    title: "",
    price: "",
    image: null,
  });

  const postData = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", insertItem.title);
    formdata.append("price", insertItem.price);
    formdata.append("image", insertItem.image);
    try {
      const response = await axios.post(
        "http://localhost:5236/postproduct",
        formdata
      );
      console.log(response);
      if (response.status === 200) {
        const refreshData = await axios.get("http://localhost:5236/getproduct");
        const finelData = refreshData.data;
        setItem(finelData);
        setInsertItem({
          title: "",
          price: "",
          image: null,
        });
        toast.success("inserted successfully");
      } else {
        console.error("Error from insertinf new item");
        toast.error("Error from insertinf new item");
      }
    } catch (error) {
      console.error("Error from insertinf new item", error);
      toast.error("Error from insertinf new item");
    }
  };

  // update data
  const [updateItem, setUpdateItem] = useState({
    title: "",
    price: "",
    image: null,
  });

  const openUpdateModal = (item) => {
    setUpdateModalOpen(true);
    setUpdateItem({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
    });
  };

  const closeUpdateModal = () => setUpdateModalOpen(false);

  const putData = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", updateItem.title);
    formdata.append("price", updateItem.price);
    formdata.append("image", updateItem.image);

    try {
      const response = await axios.put(
        `http://localhost:5236/updateproduct/${updateItem.id}`,
        formdata
      );
      console.log(response);
      if (response.status === 200) {
        const refreshData = await axios.get("http://localhost:5236/getproduct");
        const finelData = refreshData.data;
        setItem(finelData);
        setInsertItem({
          title: "",
          price: "",
          image: null,
        });
        toast.success("Updated successfully");
        closeUpdateModal();
      } else {
        console.error("Error from updateing new item");
        toast.error("Error from updateing new item");
        closeUpdateModal();
      }
    } catch (error) {
      console.error("Error from updateing new item", error);
      toast.error("Error from updateing new item");
    }
  };

  // input change
  const handleInput = (e, setState) => {
    const { name, value, files } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  // deleting items
  const deleteItems = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5236/deleteproduct/${itemId}`
      );
      if (response.status === 200) {
        const response = await axios.get("http://localhost:5236/getproduct");
        const finelData = response.data;
        setItem(finelData);
        closeDeleteModal();
        toast.success("Deleted successfully");
      } else {
        console.error("Error from Deleting new item");
        toast.error("Error from Deleting new item");
        closeDeleteModal();
      }
    } catch (error) {
      console.error("Error from Deleting new item");
      closeDeleteModal();
    }
  };

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };
  // open Delete modal
  const openDeleteModal = (itemId) => {
    setDeleteModalOpen(true);
    setItemId(itemId);
  };

  // close Delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setItemId(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Sidebar isOpen={!sidebarHidden} />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      <DeleteModal
        isDeleteOpen={deleteModalOpen}
        onCloseDelete={closeDeleteModal}
        onDelete={deleteItems}
        itemId={itemId}
      />

      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <NavLink className="active" to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </NavLink>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th colSpan={2}>Title</th>
                    <th colSpan={2}>Price</th>
                    <th>operation</th>
                  </tr>
                </thead>
                <tbody>
                  {item &&
                    item.map((items) => {
                      return (
                        <>
                          <tr key={items.id}>
                            <td>
                              <img src={`/uploads/${items.image}`} alt="user" />
                            </td>
                            <td colSpan={2}>
                              <p>{items.title}</p>
                            </td>
                            <td colSpan={2}>
                              <p>{items.price}</p>
                            </td>
                            <td style={{ display: "flex", columnGap: "1rem" }}>
                              <p style={{ cursor: "pointer" }}>
                                <i
                                  className="fa-solid fa-trash"
                                  onClick={() => openDeleteModal(items.id)}
                                ></i>
                              </p>
                              <p style={{ cursor: "pointer" }}>
                                <i
                                  className="fa-solid fa-pen"
                                  onClick={() => openUpdateModal(items)}
                                ></i>
                              </p>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className="todo">
              <div className="head">
                <h3>Insert Industry</h3>
              </div>
              <div className="todo-list">
                <form
                  method="post"
                  encType="multipart/form-data"
                  name="insert form"
                  onSubmit={postData}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="title" className="form-label">
                      Enter Titel
                    </label>
                    <input
                      style={{ padding: "12px 5px", fontSize: "15px" }}
                      type="text"
                      className="form-control"
                      value={insertItem.title}
                      id="title"
                      onChange={(e) => handleInput(e, setInsertItem)}
                      name="title"
                      placeholder="Enter title Here"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      style={{ padding: "12px 5px", fontSize: "15px" }}
                      type="number"
                      className="form-control"
                      value={insertItem.price}
                      id="price"
                      onChange={(e) => handleInput(e, setInsertItem)}
                      name="price"
                      placeholder="Enter price Here"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      onChange={(e) => handleInput(e, setInsertItem)}
                      name="image"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        backgroundColor: "#FD7238",
                        border: "none",
                        color: "#FFF",
                        marginRight: "5px",
                        padding: "7px 10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#52a01f",
                        border: "none",
                        color: "#FFF",
                        cursor: "pointer",
                        marginLeft: "5px",
                        padding: "7px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* edit modal */}
      <div
        style={{
          display: updateModalOpen ? "block" : "none",
          zIndex: "1",
          fontSize: "15px",
          padding: "25px",
          position: "fixed",
          top: "15rem",
          backgroundColor: "#f9f9f9",
          border: "1px solid #000",
          fontWeight: "bolder",
          borderRadius: "5px",
          overflow: "hidden",
          left: "480px",
          width: "35%",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "block",
            fontSize: "15px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div>
              <button
                type="button"
                style={{
                  backgroundColor: "#fd7238",
                  color: "#fff",
                  border: "none",
                  position: "absolute",
                  top: "0",
                  cursor: "pointer",
                  padding: "7px 10px",
                  right: "0",
                  borderRadius: "0 0 0 0.2rem",
                }}
                onClick={closeUpdateModal}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div>
              <p>Update Industry</p>
              <br />
              <form
                method="post"
                encType="multipart/form-data"
                name="update form"
                onSubmit={putData}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="title" className="form-label">
                    Enter Titel
                  </label>
                  <input
                    style={{ padding: "12px 5px", fontSize: "15px" }}
                    type="text"
                    className="form-control"
                    value={updateItem.title}
                    id="title"
                    onChange={(e) => handleInput(e, setUpdateItem)}
                    name="title"
                    placeholder="Enter title Here"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    style={{ padding: "12px 5px", fontSize: "15px" }}
                    type="number"
                    className="form-control"
                    value={updateItem.price}
                    id="price"
                    onChange={(e) => handleInput(e, setUpdateItem)}
                    name="price"
                    placeholder="Enter price Here"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => handleInput(e, setUpdateItem)}
                    name="image"
                  />
                  {updateItem.image && (
                    <img src={`/uploads/${updateItem.image}`} alt="current" />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#FD7238",
                      border: "none",
                      color: "#FFF",
                      marginRight: "5px",
                      padding: "7px 10px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                    onClick={closeUpdateModal}
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#52a01f",
                      border: "none",
                      color: "#FFF",
                      cursor: "pointer",
                      marginLeft: "5px",
                      padding: "7px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* edit modal */}
    </>
  );
};

export default Product;
