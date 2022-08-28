import React from 'react';
import { social } from './data';

export const SocialIcon = () => {
	return (
		<>
			<nav>
				<div className='social-container'>
					{social.map((socialIcon) => {
						const { id, url, name, image, color } = socialIcon;
						return (
							<div key={id}>
								<a href={url}>
									<div className='social'>
										<div className='logo'>
											<img src={image} alt={name} />
										</div>
										<div className='social-info'>
											<h3
												className='social-title'
												style={{ color: `${color}` }}
											>
												{name}
											</h3>
											<p className='view-link'>
												<i className='fas fa-external-link-square-alt'></i> View
												Link
											</p>
											<p
												className='social-smalltitle'
												style={{ color: `${color}` }}
											>
												{name}
											</p>
										</div>
									</div>
								</a>
							</div>
						);
					})}
				</div>
			</nav>
		</>
	);
};
