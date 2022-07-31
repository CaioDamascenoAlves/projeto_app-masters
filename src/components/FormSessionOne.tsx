import EntrySessionOne from "./EntrySessionOne"
import {useState} from "react";
import Donator from "../core/Donator"
import Button from "./Button";

interface FormSessionOneProps{
	donator: Donator 
	next?: () => void
}

export default function FormSessionOne(props: FormSessionOneProps){
	const [name, setName] = useState(props.donator.name ?? '')
	const [email, setEmail] = useState(props.donator.email ?? '')
	const [phone, setPhone] = useState(props.donator.phone ?? '')
	const [zip, setZip] = useState(props.donator.zip ?? '')
	const [city, setCity] = useState(props.donator.city ?? '') 
	const [state, setState] = useState(props.donator.state ?? '')
	const [streetAddress, setStreetAddress] = useState(props.donator.streetAddress ?? '')
	const [number, setNumber] = useState(props.donator.number ?? '')
	const [complement, setComplement] = useState(props.donator.complement ?? '')
	const [deviceCount, setDeviceCount] = useState(props.donator.deviceCount ?? '')
	return(
		<div>
			<EntrySessionOne
				texto="Name" 
				value={name}
				onChange={setName}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="Email"  
				value={email}
				onChange={setEmail}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="phone"  
				value={phone}
				onChange={setPhone}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="Zip"  
				value={zip}
				onChange={setZip}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="City"  
				value={city}
				onChange={setCity}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="State"  
				value={state}
				onChange={setState}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="StreetAddress"  
				value={streetAddress}
				onChange={setStreetAddress}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="Number"  
				value={number}
				onChange={setNumber}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="Complement"  
				value={complement}
				onChange={setComplement}
				className="md-4"
			/>
			<EntrySessionOne  
				texto="DeviceCount"  
				value={deviceCount}
				onChange={setDeviceCount}
			/>
			<div className="flex justify-end mt-3">
				<Button onClick={props.next}className="bg-emerald-500 mr-2">Next</Button>
			</div>
		</div>
	)
}