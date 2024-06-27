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
  const { item, setItem } = useItemData();
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    price: "",
    image: null,
  });

  // Form mode state
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("price", formData.price);
    formdata.append("image", formData.image);

    try {
      const url = isUpdateMode
        ? `http://localhost:5236/updateproduct/${formData.id}`
        : "http://localhost:5236/postproduct";
      const method = isUpdateMode ? "put" : "post";
      const response = await axios[method](url, formdata);

      if (response.status === 200) {
        const refreshData = await axios.get("http://localhost:5236/getproduct");
        setItem(refreshData.data);
        setFormData({
          id: null,
          title: "",
          price: "",
          image: null,
        });
        toast.success(
          isUpdateMode ? "Updated successfully" : "Inserted successfully"
        );
        setIsUpdateMode(false);
      } else {
        throw new Error("Error in form submission");
      }
    } catch (error) {
      toast.error("Error in form submission");
      console.error("Error in form submission", error);
    } finally {
      setLoading(false);
    }
  };

  // Input change handler
  const handleInput = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  // Open update modal and set form data
  const openUpdateModal = (item) => {
    setIsUpdateMode(true);
    setFormData({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
    });
  };

  // Deleting items
  const deleteItems = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5236/deleteproduct/${itemId}`
      );
      if (response.status === 200) {
        const response = await axios.get("http://localhost:5236/getproduct");
        setItem(response.data);
        closeDeleteModal();
        toast.success("Deleted successfully");
      } else {
        throw new Error("Error in deleting item");
      }
    } catch (error) {
      toast.error("Error in deleting item");
      console.error("Error in deleting item", error);
    }
  };

  // Sidebar toggle
  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  // Open delete modal
  const openDeleteModal = (itemId) => {
    setDeleteModalOpen(true);
    setItemId(itemId);
  };

  // Close delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setItemId(null);
  };

  // Window resize handler
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
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {item &&
                    item.map((items) => (
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
                    ))}
                </tbody>
              </table>
            </div>

            <div className="todo">
              <div className="head">
                <h3>{isUpdateMode ? "Update Data" : "Insert Data"}</h3>
              </div>
              <div className="todo-list">
                <form
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="title" className="form-label">
                      Enter Title
                    </label>
                    <input
                      style={{ padding: "12px 5px", fontSize: "15px" }}
                      type="text"
                      className="form-control"
                      value={formData.title}
                      id="title"
                      onChange={handleInput}
                      name="title"
                      placeholder="Enter title Here"
                      disabled={loading}
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
                      value={formData.price}
                      id="price"
                      onChange={handleInput}
                      name="price"
                      placeholder="Enter price Here"
                      disabled={loading}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      onChange={handleInput}
                      name="image"
                      disabled={loading}
                    />
                    {formData.image && isUpdateMode && (
                      <img src={`/uploads/${formData.image}`} alt="current" />
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
                      onClick={() => setIsUpdateMode(false)}
                      disabled={loading}
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
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Product;
