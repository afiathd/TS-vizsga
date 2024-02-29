import { Participant } from "../models/participant";
import { Hiphop, Rock } from "../models/category";

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

}