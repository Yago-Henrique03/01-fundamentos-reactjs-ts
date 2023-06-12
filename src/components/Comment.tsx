
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment (){
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://media.licdn.com/dms/image/D4D03AQFkZBGgaxHHaQ/profile-displayphoto-shrink_200_200/0/1679489116663?e=1691625600&v=beta&t=tUzJSdc1xfHg_PM1Tw2S9BMRcseR86OVwXyCulGV1gU"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yago Henrique</strong>
                            <time 
                                title="09 de Julho às 14:55" dateTime="2023-09-06"
                            >
                                Cerca de 2h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    {content}
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}