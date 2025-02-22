'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const TestImage = () => {
	const [prevDiff, setPrevDiff] = useState(-1)
	const [evCache, setEvCache] = useState<React.PointerEvent<HTMLImageElement>[]>([])
	const [number, setNumber] = useState(1)

	const pointerDownHandler = (event: React.PointerEvent<HTMLImageElement>) => {
		setEvCache([...evCache, event])
	}
	const pointerMoveHandler = (event: React.PointerEvent<HTMLImageElement>) => {
		const index = evCache.findIndex((ev) => ev.pointerId === event.pointerId)
		setEvCache((prevState) => {
			prevState[index] = event

			return prevState
		})

		if(evCache.length === 2) {
			const curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

			setNumber(curDiff - prevDiff);

			setPrevDiff(curDiff)
		}
	}
	const pointerUpHandler = (event: React.PointerEvent<HTMLImageElement>) => {
		const index = evCache.findIndex((ev) => ev.pointerId === event.pointerId)
		setEvCache(prevState => {
			prevState.splice(index, 1)

			return prevState
		})
	}

  return (<>
	<Image
	onPointerDown={pointerDownHandler}
	onPointerMove={pointerMoveHandler}
	onPointerUp={pointerUpHandler}
	onPointerCancel={pointerUpHandler}
	onPointerOut={pointerUpHandler}
	onPointerLeave={pointerUpHandler}
	src={'/media/5831ec_4fce619d68a14574932c7f698c2dda33~mv2.webp'} alt="cos" width={500} height={500} />
	<p>{number}</p>
	</>
  )
}

export default TestImage