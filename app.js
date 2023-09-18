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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '📋Copied to Clipboard',
            showConfirmButton: false,
            timer: 800,
            width: 200,
            height: 100,
            padding: '1em',
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
