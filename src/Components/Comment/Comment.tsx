import { useState } from "react";
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react';


interface CommentProps {
    content: string;
    onDeleteComment: (coment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
      onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
      }

    return (
    
        <div className={styles.comment}>      
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/108021488?v=4"  alt="" />

            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Inacio Silva</strong>
                            <time title='11 de maio ás 08:50h' dateTime="2023-05-11 08:50:30"> Há 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                        <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>     

    )
}