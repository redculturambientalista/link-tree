import React from 'react';
import profile1 from './images/profile1.jpg';
import profile2 from './images/profile2.jpg';

export const Profile = () => {
	return (
		<>
			<div className='profile-container'>
				<div className='profile-up'>
					<img src={profile1} alt='' />
				</div>
				<div className='profile-down'>
					<p>Red Cultura Ambientalista</p>
					{/* <p className='birthday'>
						<i className='fas fa-solid fa-crown'></i>
						<i className='fas fa-solid fa-star'></i>
						<i className='fas fa-solid fa-crown'></i>
					</p>
					<br />
					<p className='crown'>
						<i className='fas fa-solid fa-crown'></i>
					</p> */}
				</div>
			</div>
		</>
	);
};
