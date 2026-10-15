interface Airplane {
    model: string;
    passengerCapacity: number;
    rangeInKm: number;
    isJet: boolean;
}
const fleet: Airplane[] = [ /*objekte in einem array speichern*/
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

fleet.forEach(plane => { /*geht jedes element in array durch*/
    console.log("Modell:", plane.model);
    console.log("Passagierkapazität:", plane.passengerCapacity);
    console.log("Reichweite:", plane.rangeInKm, "km");
    console.log("Triebwerk:", plane.isJet ? "Jet" : "Propeller");
});

const models = fleet.map(plane => plane.model); /*erstellt neuen wert, im neuen array gepseichert*/
console.log("Flugzeugmodelle:", models);

const jets = fleet.filter(plane => plane.isJet); /*prüft jedes element und behält nur wenn bedingung true ist*/
console.log("Flugzeuge mit Jet-Triebwerk:", jets);