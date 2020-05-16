import React from 'react';

class Filters extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			sortBy: "name"
		}
	}

	async handleQuery(value){
		this.setState({'query': value}, () => {
			this.props.handleFilter(this.state)
		})
		
	}

	handleClick(value){
		this.setState({'sortBy': value}, ()=>{
			this.props.handleFilter(this.state)
		})
		
	}

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input 
							type="text" 
							className="filters__search__input" 
							placeholder="Pesquisar" 
							onChange={(e) => this.handleQuery(e.target.value)	}
						/>

						<button className="filters__search__icon">
							<i className="fa fa-search"/>
						</button>
					</div>

					<button 
						className={this.state.sortBy === 'name' ? 'filters__item is-selected' : 'filters__item'}
						onClick={() => this.handleClick('name')}
					>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button 
						className={this.state.sortBy === 'country' ? 'filters__item is-selected' : 'filters__item'}
						onClick={() => this.handleClick('country')}
					>
						País <i className="fas fa-sort-down" />
					</button>

					<button 
						className={this.state.sortBy === 'company' ? 'filters__item is-selected' : 'filters__item'}
						onClick={() => this.handleClick('company')}
					>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button 
						className={this.state.sortBy === 'department' ? 'filters__item is-selected' : 'filters__item'}
						onClick={() => this.handleClick('department')}
					>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button 
						className={this.state.sortBy === 'admissionDate' ? 'filters__item is-selected' : 'filters__item'}
						onClick={() => this.handleClick('admissionDate')}
					>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;