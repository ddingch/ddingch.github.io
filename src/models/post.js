import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now, //현재 날짜
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

//모델 생성
const Post = mongoose.model('Post', PostSchema); //첫번째 파라미터는 스키마이름, 두번째는 스키마 객체
//스키마 이름은 DB에 그 이름의 복수형태로 DB에 컬렉션 이름으로 만들어진다. Post -> posts, BookInfo -> bookinfos
//세번째 파라미터로 원하는 스키마명으로 지정해줄 수 있다. 그렇게되면 첫번째 파라미터는 다른 스키마에서 현재스키마를 참조할때 사용한다.
export default Post;
