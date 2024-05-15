import React, { useEffect, useRef, useState } from 'react'

export const Counter = () => {
	const [count, setCount] = useState(0)
	const stateRef = useRef(false)

	useEffect(() => {
		console.log(stateRef)

		if (stateRef.current === false) {
			console.log(`useEffect is called first / mounting of component`)	
		}else {
			console.log(`rerendering / updated part`)	
		}

		stateRef.current = true
		
		return(() => {
			console.log(`clean up function / unmounting part`)
		})

	}, [count])

	return (
		<div className='centerTextField'>
			Counter :- {count} <br/>
			<button onClick={() => {setCount(count + 1)}}>+</button>
			<button onClick={() => {setCount(count - 1)}}>-</button>
		</div>
	)
}
