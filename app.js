const shareButtons = document.querySelectorAll('.tile-share-button');
const headerShareButton = document.querySelectorAll('.share-button');

async function copyText(e) {
    // prevent button going to the site
    e.preventDefault();
    const link = this.getAttribute('link');
    console.log(link);
    try {
        await navigator.clipboard.writeText(link);
        // alert(`Copied the text: ${link}`);
        // alert(`📋Copied to Clipboard`);
        // Swal.fire({
        //     position: 'top-end',
        //     title: '📋Copied to Clipboard',
        //     showConfirmButton: false,
        //     timer: 550,
        //     width: '150px',
        //     height: '50px',
        //     padding: '1em',
        // });
        Snackbar.show({
            text: '📋Copied to Clipboard',
            pos: 'bottom-right',
            duration: '1500',
        });
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach((shareButtons) =>
    shareButtons.addEventListener('click', copyText)
);
headerShareButton.forEach((headerShareButton) =>
    headerShareButton.addEventListener('click', copyText)
);
