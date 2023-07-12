import Swal from "sweetalert2";
import { Delete } from "./call";

export const deleteNote = (deleteURL,id, navigate, homeURL) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const result = Delete(deleteURL, id);
        if (result === 200) {
          Swal.fire("Deleted!", "Your note has been deleted.", "success");
          navigate(homeURL)
        } else {
          Swal.fire("Delete Failed", "Something went wrong", "error");
        }
      }
    });
};