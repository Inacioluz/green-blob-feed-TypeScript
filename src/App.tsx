import { Header } from "./Components/Header/Header.jsx";
import { Sidebar } from "./Components/Sidebar/Sidebar.jsx";
import { Post } from "./Components/Post/Post.jsx";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/108021488?v=4",
      name: "Inacio Silva",
      role: "Developer Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-07 21:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://scontent.fvcp10-1.fna.fbcdn.net/v/t39.30808-6/342349042_133641826249988_977261041220547429_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_INNAgdR0a0AX-9Y-tF&_nc_ht=scontent.fvcp10-1.fna&oh=00_AfBDm2XQ7rZjGvvLLO061PVDTXMraxQhfksUOc3NIENLMA&oe=64E14A38",
      name: "Thiago Santos",
      role: "Engineer Software",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-10 18:27:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
