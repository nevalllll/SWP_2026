interface Airplane {
    model: string;
    passengerCapacity: number;
    rangeInKm: number;
    isJet: boolean;
}

const fleet: Airplane[] = [
    {
        model: "Airbus A350-900",
        passengerCapacity: 325,
        rangeInKm: 15000,
        isJet: true
    },
    {
        model: "ATR 72-600",
        passengerCapacity: 72,
        rangeInKm: 1500,
        isJet: false
    }
];

function printAirplaneInfo(plane: Airplane): void {
    console.log(`Model: ${plane.model}`);
    console.log(`Passenger Capacity: ${plane.passengerCapacity}`);
    console.log(`Range: ${plane.rangeInKm} km`);
    console.log(`Engine Type: ${plane.isJet ? "Jet" : "Turboprop/Propeller"}`);
}
fleet.forEach(printAirplaneInfo);