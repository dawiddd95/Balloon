import { MutationTree, ActionTree, GetterTree } from 'vuex';
import axios from 'axios';

// Types for store
export interface Character {
    id: number;
    image: string;
    name: string;
    status: string;
    origin: {
        name: string;
        url: string;
    };
    species: string;
}
  
// Store state
export interface State {
    characters: Character[];
    prices: string[]
}

// Our state with initial state
const state = (): State => ({
    characters: [],
    prices: []
});
  
// Mutations
const mutations: MutationTree<State> = {
    setCharacters(state, characters: Character[]) {
        state.characters = characters;
    },
    setPrices(state, characters: string[]) {
        state.prices = characters;
    },
};
  
// Actions
const actions: ActionTree<State, State> = {
    async fetchCharacters({ commit }) {
        try {
            // Create new array with length 4 elements
            const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 180) + 1);

            const response = await axios.get<Character[]>(
                `https://rickandmortyapi.com/api/character/
                ${randomNumbers[0]},${randomNumbers[1]},${randomNumbers[2]},${randomNumbers[3]}`
            );
            const random = response.data.sort(() => 0.5 - Math.random());
            commit('setCharacters', random.slice(0, 4));
            commit('setPrices', ['$98.99', '$775', '$200', '$98.23'])
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    }
};
  
// Getters
const getters: GetterTree<State, State> = {
    // getters names
    characters: state => state.characters,
    prices: state => state.prices
};

export default {
    state,
    mutations,
    actions,
    getters
};