import { useState } from "react";
import { toast } from "react-toastify";


export const DeleteModal = ({
  isDeleteOpen,
  onCloseDelete,
  onDelete,
  itemId,
}) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleDelete = () => {
    if (isCheckboxChecked) {
      onDelete(itemId);
      onCloseDelete();
      setIsCheckboxChecked(false);
    } else {
      toast.error("Please check First");
    }
  };

  return (
    <>
      {isDeleteOpen && (
        <div
          style={{
            display: "block",
            zIndex: "1",
            fontSize: "15px",
            padding: "25px",
            position: "fixed",
            top: "195px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #000",
            fontWeight: "bolder",
            borderRadius: "5px",
            overflow: "hidden",
            left: "480px",
            width: "35%",
            height: "220px",
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
              <button
                type="button"
                style={{
                  backgroundColor: "#FD7238",
                  color: "#fff",
                  border: "none",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  padding: "0.7rem 1rem",
                  borderRadius: "0 0 0 0.7rem",
                  cursor: "pointer",
                }}
                onClick={onCloseDelete}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="sub_container ">
                <div className=" ">
                  <p>Are You Sure For Delete This Item ?</p>
                  <br />
                  <input
                    id="check"
                    name="check"
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                  />{" "}
                  <label
                    id="check"
                    htmlFor="check"
                    style={{ cursor: "pointer" }}
                  >
                    Yes, I'm sure!
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                  }}
                >
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#52a01f",
                      border: "none",
                      color: "#FFF",
                      marginTop: "2rem",
                      padding: "1rem 1rem",
                      marginRight: "5px",
                      borderRadius: "5px",
                      fontSize: "1rem",
                    }}
                    onClick={onCloseDelete}
                  >
                    CANCLE
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    style={{
                      backgroundColor: "#FD7238",
                      border: "none",
                      color: "#FFF",
                      marginTop: "2rem",
                      padding: "1rem 1rem",
                      marginLeft: "5px",
                      borderRadius: "5px",
                      fontSize: "1rem",
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
