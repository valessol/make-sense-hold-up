// import React from 'react'

// const FileUpload = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default FileUpload

import React from 'react'
import axios from 'axios';

class FileUpload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    submit(){
        const data = new FormData() 
        data.append('imageModel', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        
        console.log(data)

        axios.post(`http://localhost:3000/api/entrepreneurship/rafa@mail.com/challenge/1/uploadphoto`, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })

    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                            <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="fhfh" onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default FileUpload;
