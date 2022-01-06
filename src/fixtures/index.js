export const comment = {
  post_uid: '',
  parent_uid: '',
  sort_key: '',
  user_uid: '',
  title: '',
  content: 'comment content',
  children: [/*another comment here?*/],
  active: true,
  created: new Date(),
  updated: new Date()
};

export const post = {
  post_uid: '',
  parent_uid: '',
  sort_key: '',
  user_uid: '',
  title: 'title',
  content: 'content',
  children: [comment],
  active: true,
  created: new Date(),
  updated: new Date()
};

export const user = {
  user_uid: '',
  role_uid: '',
  first_name: '',
  last_name: '',
  email: '',
  hashed_password: '',
  posts: [],
  posts_followed: [],
  active: true,
  confirmed: true,
  created: new Date(),
  updated: new Date()
};
