import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ContentList = () => {

	const [posts, setPosts] = useState([])
 
	useEffect(() => {
		getPosts()
	}, [])

	const getPosts = () => {
		return axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				setPosts(res.data)
				console.log(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}


	return (
		<div className='LeftTextField'>
			<h1>Posts :- </h1>
			{posts.map((ele) => {
				return ( 
					<ul className='borderMargin'>
	
						<li>
							{ele?.title}
						</li>
						<li>
							{ele?.body}
						</li>
					</ul>
				)
			})}
		</div>
	)
}
