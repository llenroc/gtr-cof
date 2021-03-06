namespace events {
    export class Bus<T> {
        private listeners: Array<(x:T)=>void> = [];

        public subscribe(listener: (x:T)=>void): void {
            this.listeners.push(listener);
        }

        public publish(event: T): void {
            for (let listener of this.listeners) {
                listener(event);
            }
        }
    }

    export let scaleChange: Bus<ScaleChangedEvent> = new Bus<ScaleChangedEvent>();

    export interface ScaleChangedEvent {
        readonly nodes: music.Node[];
        readonly mode: music.Mode;
    }

    export let tonicChange: Bus<TonicChangedEvent> = new Bus<TonicChangedEvent>();

    export interface TonicChangedEvent {
        readonly noteSpec: music.NoteSpec;
    }

    export let modeChange: Bus<ModeChangedEvent> = new Bus<ModeChangedEvent>();

    export interface ModeChangedEvent {
        readonly mode: music.Mode;
    }

    export let chordChange: Bus<ChordChangeEvent> = new Bus<ChordChangeEvent>();

    export interface ChordChangeEvent {
        readonly chordIndex: number;
    }

    export let toggle: Bus<ToggleEvent> = new Bus<ToggleEvent>();

    export interface ToggleEvent {
        readonly index: number;
    }

    export let tuningChange: Bus<TuningChangedEvent> = new Bus<TuningChangedEvent>();

    export interface TuningChangedEvent {
        readonly tuning: string;
        readonly dots: Array<[number, number]>;
        readonly description: string;
        readonly notes: Array<number>;
    }

    export let leftHandedChange: Bus<LeftHandedFretboardEvent> = new Bus<LeftHandedFretboardEvent>();

    export interface LeftHandedFretboardEvent {
        readonly isLeftHanded: boolean;
    }

    export let fretboardLabelChange: Bus<FretboardLabelChangeEvent> = new Bus<FretboardLabelChangeEvent>();

    export interface FretboardLabelChangeEvent {
        readonly labelType: FretboardLabelType;
    }

    export enum FretboardLabelType {
        None,
        NoteName,
        Interval
    }
}