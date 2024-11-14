document.addEventListener('DOMContentLoaded', () => {
    const likeIcon = document.querySelector('.icon');
    const likeCount = document.querySelector('.like-count');
    const commentsContainer = document.querySelector('.comments-container');

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => {
        addCommentToDOM(comment);
    });
    let postCount = parseInt(localStorage.getItem('userCount')) || 1;

    const isLiked = localStorage.getItem('isLiked') === 'true';
    if (isLiked) {
        likeIcon.src = 'https://i.pinimg.com/originals/88/dc/3d/88dc3dacb611406baf5d3f02e7196e65.png';
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }else{
        likeIcon.src = 'https://w7.pngwing.com/pngs/530/612/png-transparent-heart-like-love-twitter-icon.png';

    }

    window.toggleLike = () => {
        const isLiked = localStorage.getItem('isLiked') === 'true';
        if (isLiked) {
            likeIcon.src = 'https://w7.pngwing.com/pngs/530/612/png-transparent-heart-like-love-twitter-icon.png';
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
            localStorage.setItem('isLiked', 'false');
        } else {
            likeIcon.src = 'https://i.pinimg.com/originals/88/dc/3d/88dc3dacb611406baf5d3f02e7196e65.png';
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
            localStorage.setItem('isLiked', 'true');
        }
    };

    window.addComment = () => {
        const userComment = prompt('Enter your comment:');

        if (userComment) {
            const newComment = {
                username: 'user' + postCount,
                text: userComment,
            };
            postCount++;
            addCommentToDOM(newComment);
            comments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(comments));
            localStorage.setItem('userCount', postCount);
        }
    };

    function addCommentToDOM(comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${comment.username}:</strong> ${comment.text}`;
        commentsContainer.appendChild(commentElement);
    }
});
