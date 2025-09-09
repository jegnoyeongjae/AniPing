import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChaPostItem from './ChaPostItem';
import './ChaPost.css';
const postItem = [
  {
    id: '1',
    title: '제목11111111111111111111111111111111111111',
    writer: '작성자1',
    date: '2025.08.01',
    content: '123',
    views: 31,
    like: 30,
  },
  {
    id: '2',
    title: '제목22222222222222222222222222222222222222222',
    writer: '작성자1',
    date: '2025.08.01',
    content: '124',
    views: 31,
    like: 30,
  },
  {
    id: '3',
    title: '제목3333333333333333333333333333333333333333',
    writer: '작성자1',
    date: '2025.08.01',
    content: '125',
    views: 31,
    like: 30,
  },
  {
    id: '4',
    title: '제목11111111111111111111111111111111111111',
    writer: '작성자1',
    date: '2025.08.01',
    content: '123',
    views: 31,
    like: 30,
  },
  {
    id: '5',
    title: '제목22222222222222222222222222222222222222222',
    writer: '작성자1',
    date: '2025.08.01',
    content: '124',
    views: 31,
    like: 30,
  },
  {
    id: '6',
    title: '제목3333333333333333333333333333333333333333',
    writer: '작성자1',
    date: '2025.08.01',
    content: '125',
    views: 31,
    like: 30,
  },
  {
    id: '7',
    title: '제목11111111111111111111111111111111111111',
    writer: '작성자1',
    date: '2025.08.01',
    content: '123',
    views: 31,
    like: 30,
  },
  {
    id: '8',
    title: '제목22222222222222222222222222222222222222222',
    writer: '작성자1',
    date: '2025.08.01',
    content: '124',
    views: 31,
    like: 30,
  },
  {
    id: '9',
    title: '제목3333333333333333333333333333333333333333',
    writer: '작성자1',
    date: '2025.08.01',
    content: '125',
    views: 31,
    like: 30,
  },
];
const ChaPost = ({ posts }) => {
  return (
    <div className="ChaPost">
      <h1>자유게시판</h1>
      <ul className="postCate">
        <li className="postTitle">제목</li>
        <li className="postWriter">작성자</li>
        <li className="postDate">작성일</li>
        <li className="postViews">조회수</li>
        <li className="postLike">좋아요</li>
      </ul>
      <div>
        <ul>
          {posts.map((post) => (
            <ChaPostItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
      <div className="newPost">
        <Link to={'/chaNewPost'}>새 글 작성</Link>
      </div>
    </div>
  );
};
export default ChaPost;
