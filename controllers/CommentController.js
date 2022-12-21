import PostModel from '../models/Post.js';
import CommentModel from '../models/Comment.js';
import Post from '../models/Post.js';

export const createComment = async (req, res) => {
  try {
    const {postId, comment} = req.body

    if (!comment)
    return res.json({message: "Komentaras negali būti tuščias"})

    const newComment = new CommentModel({comment})
    await newComment.save()

    try {
      await PostModel.findByIdAndUpdate(postId, {
        $push: {comments: newComment._id}
      })
    } catch (e) {
      console.log(e)
    }

    res.json(newComment)
  } catch (e) {
    res.json({message: "Kažkas nepavyko"})
  }
}