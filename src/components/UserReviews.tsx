import CardContainer from "./UI/CardContainer";
import Review from "./Review";
import styles from "./UserReviews.module.scss";
import User1 from "../assets/img/user-1.jpg";
import User2 from "../assets/img/user-2.jpg";
import InlineBtn from "./UI/InlineBtn";

const DUMMY_REVIEWS = [
  {
    id: "user1",
    image: User1,
    name: "Nick Smith",
    date: "Feb 23rd, 2017",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
    rating: 7.8,
  },
  {
    id: "user2",
    image: User2,
    name: "Mary Thomas",
    date: "Sept 13th, 2017",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
    rating: 9.3,
  },
];

const UserReviews: React.FC = () => {
  return (
    <div className={styles.userReviews}>
      {DUMMY_REVIEWS.map((item) => (
        <CardContainer key={item.id} review>
          <Review
            text={item.text}
            name={item.name}
            date={item.date}
            rating={item.rating}
            image={item.image}
          />
        </CardContainer>
      ))}

      <InlineBtn>Show All <span>&rarr;</span></InlineBtn>
    </div>
  );
};

export default UserReviews;
