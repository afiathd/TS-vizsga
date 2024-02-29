import { Participant } from "../models/participant";
import { Category, Hiphop, Rock } from "../models/category";

export class ParticipantManager{

    private participants: Map<number, Participant> = new Map();

    addParticipant(participant: Participant): void {
        this.participants.set(participant.id, participant)
    }

    removeParticipant(participantId: number): void {
        this.participants.delete(participantId);
    }

    listParticipants(): Participant[] {
        return Array.from(this.participants.values());
    }

   /*  listByCategory(category : Category): Participant[] {
        return Array.from(this.participants.values()).filter(participant => participant.category.includes(category));
    } */
    
}