import { Participant } from "../models/participant";
import { Hiphop, Rock } from "../models/category";
import { ParticipantManager } from "./participantManagement";

class EventManager{

    private events: Map<number, ParticipantManager> = new Map;
    private participants = new ParticipantManager;
    private date: Date | string;

    constructor(date: Date | string){
        this.date = date;
    }

    addParticipant(participant: Participant): void{
        this.participants.addParticipant(participant);
    }

    removeParticipant(participantId: number): void{
        this.participants.removeParticipant(participantId);
    }

    listParticipants(): Participant[] {
        return this.participants.listParticipants();
    }
}