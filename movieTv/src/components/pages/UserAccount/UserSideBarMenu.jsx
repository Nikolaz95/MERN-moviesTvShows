
//import img
import AvatarIcon from "../../../assets/icons/icon2-user.png"
import UpdateProfile from "../../../assets/icons/icon-profile.png"
import UploadImg from "../../../assets/icons/icon-upload.png"
import UpdatePassword from "../../../assets/icons/icon-update-password.png"
import DeleteAccoutn from "../../../assets/icons/icon-delete-account.png"



const menuItem = [
    {
        name: "Profile Info",
        url: "/user/settings-Profile",
        icon: AvatarIcon,
    },
    {
        name: "Update Profile",
        url: "/user/settings-ProfileUpdate",
        icon: UpdateProfile,
    },
    {
        name: "Upload Picture",
        url: "/user/settings-UploadPicture",
        icon: UploadImg,
    },
    {
        name: "Update Password",
        url: "/user/settings-UpdatePassword",
        icon: UpdatePassword,
    },

    {
        name: "Delete account",
        url: "/user/settings-DeleteAccount",
        icon: DeleteAccoutn,
    },

];


export default menuItem;