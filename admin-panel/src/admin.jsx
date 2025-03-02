import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { Img, Main, MainDiv, Name, ProductCard, Price, IconSpan } from "../../client/src/globalStyles";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import productApiAdmin from "./api/servicesApi";
import productApi from "../../client/src/project/api/servicesApi";
import { MdOutlineReviews } from "react-icons/md";
import { StyledLink } from "../../client/src/project/components/header/header";

export const Admin = () => {
  const [value, setValue] = useState({});
  const [active, setActive] = useState(false);
  const [items, setItems] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const nav = useNavigate()
  const addData = async () => {
    const formData = new FormData();
    formData.append("modelName", value.modelName);
    formData.append("brand", value.brand);
    formData.append("price", value.price);
    formData.append("category", value.category);
    formData.append("image", selectedFile);

    try {
      const res = await axios.post("/api/AddProducts", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log("Ապրանքը հաջողությամբ ավելացվեց", res);
      setActive(e => !e);
    } catch (error) {
      console.error("Սխալ ապրանքի ավելացման ժամանակ:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await productApi.GetProducts();
        if (res.data && Array.isArray(res.data.data)) {
          setItems([...res.data.data].reverse());
        } else {
          console.error("API-ից վերադարձված տվյալները սխալ ֆորմատով են:", res.data);
        }
      } catch (error) {
        console.error("Սխալ ապրանքների բեռնելու ժամանակ:", error);
      }
    };

    getData();
  }, [active]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setValue({ ...value, image: file });
  };
  const deletePhone = async (id) => {
    try {
      const token = localStorage.getItem('adminToken')
      if (!token) {
        nav('/')
        return
      }
      const res = await productApi.DeleteProducts(id, token);
      console.log("ապրանքը հաջողությամբ ջնջվեց", res);
      setActive(e => !e);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditForm = (productId) => {
    // const productToEdit = items.find(item => item._id === productId);
    // setValue({
    //   modelName: productToEdit.modelName,
    //   price: productToEdit.price,
    //   category: productToEdit.category,
    //   brand: productToEdit.brand,
    //   image: null // 
    // });
    setEditingProductId(productId);
  };

  const putProducts = async (id) => {
    console.log(id);

    try {
      const formData = new FormData();
      formData.append("modelName", value.modelName);
      formData.append("price", value.price);
      formData.append("category", value.category);
      formData.append("brand", value.brand);

      if (selectedFile) {
        formData.append("image", selectedFile);
      }
      const token = localStorage.getItem("adminToken");
      console.log(token);

      const response = await productApiAdmin.putProduct(token, id, formData)
      console.log(response.data);


      setEditingProductId(null);
      setActive(prev => !prev);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  useEffect(() => {
    M.FormSelect.init(document.querySelectorAll("select"));
  }, [editingProductId, active]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value.modelName || !value.price) {
      console.log('Չեն լրացվել բոլոր դաշտերը');
      return;
    }

    const data = new FormData();
    data.append("modelName", value.modelName);
    data.append("brand", value.brand);
    data.append("price", value.price);
    data.append("category", value.category);

    if (selectedFile) {
      data.append("image", selectedFile);
    }

    try {
      const res = await productApi.products(data);
      console.log("Product added successfully", res);
      setActive(prev => !prev);
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <>
      <style>
        {`
          .select-wrapper input.select-dropdown {
            color: #939393 !important;
          }
        `}
      </style>
      <StyledLink to={"/AdminReview"}>
      <IconSpan>
        <MdOutlineReviews />
      </IconSpan>

      </StyledLink>
     


      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <form action="#">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" name="image" id="img" onChange={handleFileChange} />
                  </div>
                  <div className="file-path-wrapper">
                    <label htmlFor="img">Ընտրեք նկարը</label>
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </form>

              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        id="modelName"
                        type="text"
                        className="validate"
                        name="modelName"
                        value={value.modelName || ''}
                        onChange={handleChange}
                      />
                      <label htmlFor="modelName">Անվանում</label>
                    </div>
                    <div className="input-field col s6">
                      <input
                        id="price"
                        type="text"
                        className="validate"
                        name="price"
                        value={value.price || ''}
                        onChange={handleChange}
                      />
                      <label htmlFor="price">Գին</label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="input-field">
                <select name="category" value={value.category || ''} onChange={handleChange}>
                  <option value="" disabled selected>Ընտրեք տեսակը</option>
                  <option value="Phones">Հեռախոսներ</option>
                  <option value="Watches">Ժամացույցներ</option>
                  <option value="Notebooks">Նոթբուքներ</option>
                  <option value="Video-cards">Տեսա քարտեր</option>
                  <option value="Computers">Համակարգիչներ</option>
                  <option value="accessories">Աքսեսուարներ</option>
                </select>
              </div>

              <div className="input-field">
                <select name="brand" value={value.brand || ''} onChange={handleChange}>
                  <option value="" disabled selected >Ընտրեք ապրանքանիշը</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="Xiaomi">Xiaomi</option>
                  <option value="NVIDIA">Nvidia</option>
                </select>
              </div>
            </div>
            <div className="card-action">
              <button className="waves-effect waves-light btn" onClick={handleSubmit}>Ավելացնել</button>


            </div>

          </div>
        </div>
      </div>




      <Main>
        {items.map((e, i) => (
          <MainDiv key={e._id}>
            <ProductCard>
              <Img>
                <img
                  src={`http://localhost:3001/uploads/${e.image}`}
                  alt={e.modelName}
                  style={{ width: "100%" }}
                />
              </Img>
              <Name>{e.modelName}</Name>
              <Price>{e.price} AMD</Price>
              <div className="card-action">
                <button className="waves-effect waves-light btn" onClick={() => deletePhone(e._id)}>ջնջել</button>
              </div>
              <div className="card-action">
                <button className="waves-effect waves-light btn" onClick={() => openEditForm(e._id)}>Փոփոխել</button>
              </div>

              {editingProductId === e._id && (
                <>


                  <form action="#">
                    <div className="file-field input-field">
                      <div className="btn">
                        <span>File</span>
                        <input type="file" name="image" id="img" onChange={handleFileChange} />
                      </div>
                      <div className="file-path-wrapper">
                        <label htmlFor="img">Ընտրեք նկարը</label>
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>
                  </form>
                  <input
                    type="text"
                    name="modelName"
                    value={value.modelName || ''}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="price"
                    value={value.price || ''}
                    onChange={handleChange}
                  />

                  <div className="input-field">
                    <select name="category" value={value.category} onChange={handleChange}>
                      <option value="" disabled selected>Ընտրեք տեսակը</option>
                      <option value="Phones">Հեռախոսներ</option>
                      <option value="Watches">Ժամացույցներ</option>
                      <option value="Notebooks">Նոթբուքներ</option>
                      <option value="Video-cards">Տեսա քարտեր</option>
                      <option value="Computers">Համակարգիչներ</option>
                      <option value="accessories">Աքսեսուարներ</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <select name="brand" value={value.brand} onChange={handleChange}>
                      <option value="" disabled selected>Ընտրեք ապրանքանիշը</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Apple">Apple</option>
                      <option value="Xiaomi">Xiaomi</option>
                      <option value="NVIDIA">Nvidia</option>
                    </select>
                  </div>

                  <button className="waves-effect waves-light btn" onClick={() => putProducts(e._id)}>Պահպանել</button>
                </>
              )}
            </ProductCard>
          </MainDiv>
        ))}
      </Main>
    </>
  );
};