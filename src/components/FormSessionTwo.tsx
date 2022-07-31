import { useState } from "react"
import Donator from "../core/Donator";
import Button from "./Button";
import EntrySessionTwo from "./EntrySessionTwo"

interface FormSessionTwoProps{
	donator: Donator;
	return?: () => void
}

export default function FormSessionTwo(props: FormSessionTwoProps){
	const [devices, setDevices] = useState(props.donator.devices ?? '')
	const [type, setType] = useState(props.donator.type ?? '')
	const [condition, setCondition] = useState(props.donator.condition ?? '')
	return(
		<div>
			<EntrySessionTwo
				texto="Devices" 
				value={devices}
				onChange={setDevices}
				className="md-4"
			/>
			<EntrySessionTwo
				texto="Type" 
				value={type}
				onChange={setType}
				className="md-4"
			/>
			<EntrySessionTwo
				texto="Condition" 
				value={condition}
				onChange={setCondition}
				className="md-4"
			/>
			<div className="flex justify-end mt-3">
			<Button  className="bg-gray-500">Save</Button>
			<Button  onClick={props.return} className="bg-gray-500">Return</Button>
			</div>
		</div>
	)
}