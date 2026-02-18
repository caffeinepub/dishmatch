import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { Restaurant, Mode, Category, Neighborhood } from '../backend';

export function useGetAllRestaurants() {
  const { actor, isFetching } = useActor();

  return useQuery<Restaurant[]>({
    queryKey: ['restaurants'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRestaurants();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRestaurantsByMode(mode: Mode) {
  const { actor, isFetching } = useActor();

  return useQuery<Restaurant[]>({
    queryKey: ['restaurants', 'mode', mode],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getByMode(mode);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRestaurantsByCategory(category: Category) {
  const { actor, isFetching } = useActor();

  return useQuery<Restaurant[]>({
    queryKey: ['restaurants', 'category', category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRestaurantsByNeighborhood(neighborhood: Neighborhood) {
  const { actor, isFetching } = useActor();

  return useQuery<Restaurant[]>({
    queryKey: ['restaurants', 'neighborhood', neighborhood],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getByNeighborhood(neighborhood);
    },
    enabled: !!actor && !isFetching,
  });
}

// Local storage for likes
const LIKES_KEY = 'dishmatch_likes';

export function useLikes() {
  const queryClient = useQueryClient();

  const getLikes = (): Restaurant[] => {
    const stored = localStorage.getItem(LIKES_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  const { data: likes = [] } = useQuery<Restaurant[]>({
    queryKey: ['likes'],
    queryFn: getLikes,
    staleTime: Infinity,
  });

  const addLike = useMutation({
    mutationFn: async (restaurant: Restaurant) => {
      const currentLikes = getLikes();
      const exists = currentLikes.some(r => r.name === restaurant.name);
      if (!exists) {
        const newLikes = [...currentLikes, restaurant];
        localStorage.setItem(LIKES_KEY, JSON.stringify(newLikes));
      }
      return restaurant;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likes'] });
    },
  });

  const removeLike = useMutation({
    mutationFn: async (restaurantName: string) => {
      const currentLikes = getLikes();
      const newLikes = currentLikes.filter(r => r.name !== restaurantName);
      localStorage.setItem(LIKES_KEY, JSON.stringify(newLikes));
      return restaurantName;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likes'] });
    },
  });

  return {
    likes,
    addLike: addLike.mutate,
    removeLike: removeLike.mutate,
    isAddingLike: addLike.isPending,
  };
}
