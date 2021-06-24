import React from 'react';

export default function Offline() {
	return (
		<div class='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
			<div class='flex'>
				<div class='flex-shrink-0'>!</div>
				<div class='ml-3'>
					<p class='text-sm text-yellow-700'>
						You are offline. Don't worry, you still can do things.
					</p>
				</div>
			</div>
		</div>
	);
}
