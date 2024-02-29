import { Participant } from "../models/participant";
import { Hiphop, Rock } from "../models/category";
import { ParticipantManager } from "./participantManagement";

export class EventManager{

    private events: Map<number, ParticipantManager> = new Map();
    private participants = new ParticipantManager;
    private date: Date | string;

    constructor(date: Date | string){
        this.date = date;
    }

    addParticipant(participant: Participant): void{
        this.participants.addParticipant(participant);
    }

    removeParticipant(participant: Participant): void{
        this.participants.removeParticipant(participant.id);
    }

    listParticipants(): Participant[] {
        return this.participants.listParticipants();
    }
}