let CurrentReviewer = 0
let ForwardArrow = document.querySelector('.forward-button')
let BackArrow = document.querySelector('.back-button')

class Reviewer {
    constructor(name,picture,title,review) {
        this.name = name
        this.picture = picture
        this.title = title
        this.review = review
    }
}

const ReviewerArray = [ 
    new Reviewer('Emily Roberts','\\emmy_picture.jpg','Owner of Emily Airheart Aviation','I hired Zack to design and develop my website, and I have never been happier. He is very professional and easily available, I was able to contact him at anytime! I reccomended Zack to a bunch of my friends needing a developer! Very Professional.'),
    new Reviewer('Angie Wilson','\\angie_picture.jpg','Owner of Angie\'s Food Cakes','I found out about Zack via a family friend and loved his work. I had a vision of what I wanted my dream website to be and he delivered perfectly. We went over what I wanted, he drew a mockup and presented it to me. I was over the moon with the mockup. He gave me a timeframe to expect completion of the project and delivered a day early!'),
    new Reviewer('Annie & Minerva','\\annie_minerva_picture.jpg','Owners of Minnie-Anns Cafe','We found Zack online and loved some of his previous work. We wanted a really cute website that showed our menu and how people to reach us and he delievered perfectly. We went through mutiple drafts of the design before we came to the final product but we absolutley adored it once it was done. He was very punctual, and open with us at all stages I would definatley reccomend him to anyone wanting a website!'),
    new Reviewer('Max Fredrick','\\max_picture.jpg','Owner of Min-Max Accounting','We took Zack on to design our website. We wanted something with a puncutal, modern look and after seeing some examples we dialed in on a final product. It was refreshing to get a freelancer who is easily available and willing to awnser questions at almost anytime of the day. He made sure to keep me in the loop at every stage of the project and delievered it on time and looking just as good as the mockups!')
]

InputReviewData();

ForwardArrow.addEventListener('click', function() {
    CurrentReviewer += 1
    if(CurrentReviewer > ReviewerArray.length - 1){
        CurrentReviewer = 0
    }
    InputReviewData();
})

BackArrow.addEventListener('click', function() {
    CurrentReviewer -= 1
    if(CurrentReviewer < 0) {
        CurrentReviewer = ReviewerArray.length - 1
    }
    InputReviewData();
})

function InputReviewData(Case) {
    Case = CurrentReviewer
    let doc_img = document.querySelector('.reviewer-image')
    let doc_title = document.querySelector('.reviewer-title')
    let doc_name = document.querySelector('.reviewer-name')
    let doc_review = document.querySelector('.review-content')
    
    doc_img.src = ReviewerArray[Case].picture
    doc_title.innerHTML = ReviewerArray[Case].title
    doc_name.innerHTML = ReviewerArray[Case].name
    doc_review.innerHTML = ReviewerArray[Case].review
}