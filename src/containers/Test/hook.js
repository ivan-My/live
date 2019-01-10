import React from 'react';

export const hooks = (WrapComponent) => {
	return class extends React.Component {
		state = {
			name: 'mingyang'
		}

		render() {
			return (
				<div>
					高级组件已经加载完成
					<WrapComponent {...this.state} />
				</div>
			)
		}
	}
}