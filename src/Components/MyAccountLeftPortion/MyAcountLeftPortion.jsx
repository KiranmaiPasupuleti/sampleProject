import {
  faAddressCard,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MyAcountLeftPortion() {
  const [selectedImage, setSelectedImage] = useState("");
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/registeredData").then((res) => {
      setProfileData(res.data);
    });
  }, []);

  useEffect(() => {
    if (profileData) {
      const fetchData = profileData.find(
        (user) => user.email === localStorage.getItem("email")
      );
      setProfileData(fetchData);
    }
  }, []);

  // console.log(profileData)

  const profileImageSubmit = async(e) => {
    console.log('img submitted')
    e.preventDefault();
    fetchData()
    // const formData = {
    //   firstName: profileData.firstName,
    //   lastName: profileData.lastName,
    //   email: profileData.email,
    //   mobileNo: profileData.mobileNo,
    //   password:profileData.password,
    //   confirmPassword: profileData.confirmPassword,
    //   gender: profileData.gender,
    //   id: profileData.id,
    //   // image: selectedImage.base64,
    //   image: selectedImage.url,
    // };
    // console.log(formData)



    // await axios
    //   .patch(`http://localhost:3002/registeredData/${profileData.id}`, formData)
    //   .then((res) => {
    //     setProfileData({ ...profileData, image: res.data.image });
    //     console.log(profileData)
    //   })
    //   .catch((e) => {
    //     console.log("error uploading image", e);
    //   });
  };

  const fetchData = async () => {
    const formData = {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      email: profileData.email,
      mobileNo: profileData.mobileNo,
      password:profileData.password,
      confirmPassword: profileData.confirmPassword,
      gender: profileData.gender,
      id: profileData.id,
      // image: selectedImage.base64,
      image: selectedImage.url,
    };
    try {
      await axios.patch(`http://localhost:3002/registeredData/${profileData.id}`, formData).then((res)=>{
        setProfileData({ ...profileData, image: res.data.image })
      })
      // Handle response
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleImageChange = (event) => {
    // console.log('changes image')
    event.preventDefault();
    const file = event.target.files[0];
    if (
      (file && file.type === "image/png") ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg"
    ) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        const photoURL = URL.createObjectURL(file);
        setSelectedImage({ base64: base64Image, url: photoURL });
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="col-12 col-md-5 m-1">
      <FontAwesomeIcon
        style={{ width: "80px", height: "80px" }}
        icon={faUser}
      />

      <div className="d-flex flex-column">
        <form onSubmit={profileImageSubmit}>
          <input
            type="file"
            id="files"
            name="myImage"
            className="ml-5 pl-5 mb-2"
            onChange={handleImageChange}
          />

          <button className="upload-button mb-2 btn btn-warning" type="submit">
            Upload
          </button>
        </form>
        {/* <button className="btn btn-warning m-1 align-self-center">
          Upload
        </button> */}
        <Link to={"/order"}>
          <button className="bg-transparent border-0">
            <FontAwesomeIcon icon={faList} /> Order
          </button>
        </Link>
        <Link to={"/profile"}>
          <button className="bg-transparent border-0">
            <FontAwesomeIcon icon={faUser} className="me-1" />
            Profile
          </button>
        </Link>
        <Link to={"/addProductToCartCheckout"}>
          <button className="bg-transparent border-0">
            <FontAwesomeIcon icon={faAddressCard} /> Address
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MyAcountLeftPortion;
