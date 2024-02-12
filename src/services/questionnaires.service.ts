import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Questionnary } from '../models/questionnary.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {
  private questionnaires!: WritableSignal<Questionnary[]>;
  
  constructor() {
    this.questionnaires = signal<Questionnary[]>([]);
  }

  addQuestionnary(questionnary: Questionnary) {
    this.questionnaires.update(items => [...items, questionnary]);
  }

  getQuestionnaires(): Signal<Questionnary[]> {
    return this.questionnaires;
  }
}
