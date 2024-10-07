import Swal from 'sweetalert2';

export async function deleteDataAlert() {
   Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this data!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });
}

export async function successAlert(titleMessage, message) {
  Swal.fire({
    icon: 'success',
    titleMessage,
    message
  });
}

export async function errorAlert(titleMessage, message) {
    Swal.fire({
        icon: 'error',
        titleMessage,
        message
    });
}