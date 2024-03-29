import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [comment, setComment] = useState("")

	const onChangeComentario = (event) => {
		setComment(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comment}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(comment) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario