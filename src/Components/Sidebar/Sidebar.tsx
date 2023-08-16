import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
       <img className={styles.cover}
        src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
        />
    
      <div className={styles.perfil}>
      <Avatar src="https://scontent.fvcp10-1.fna.fbcdn.net/v/t1.6435-9/118089129_106510437838937_6896209810994877188_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4h6M0HvEnz0AX_R3b8o&_nc_ht=scontent.fvcp10-1.fna&oh=00_AfDAdo_wBzZo8NFOpOACr_Sb0lJSHac4nfvTkJXqswqMBw&oe=64F79446" />
      

        <strong>Inacio Silva</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
