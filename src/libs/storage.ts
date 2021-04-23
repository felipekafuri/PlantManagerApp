import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import * as Notifications from 'expo-notifications'

export interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  },
  dateTimeNotification: Date;
  hour: string;
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps
    notificationId: string
  }
}

export async function savePlants(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification)
    const dateNow = new Date()

    const {times, repeat_every} = plant.frequency

    if(repeat_every=== 'week') {
      const interval = Math.trunc(times/7)
      nextTime.setDate(dateNow.getDate() + interval)
    }
    else{
      nextTime.setDate(nextTime.getDate() + 1)
    }

    const seconds = Math.abs(Math.ceil((dateNow.getTime() - nextTime.getTime()) / 1000))

    const notificationId = await Notifications.scheduleNotificationAsync({
      content:{
        title: 'Heeey, 🌱',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data:{
          plant
        }
        
      },
      trigger:{
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true
      }
    })

    const data = await AsyncStorage.getItem('@PlantManager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId
      }
    }

    await AsyncStorage.setItem('@PlantManager:plants', 
      JSON.stringify({
        ...newPlant,
        ...oldPlants
      })
    );
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadPlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem('@PlantManager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const plantsSorted = Object.keys(plants).map((plant) => {
      return {
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
      }
    })
    .sort((a, b) => 
      Math.floor(
        new Date(a.dateTimeNotification).getTime() / 1000 -
        Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
    );

    return plantsSorted;
  } catch (error) {
    throw new Error(error);
  }
}


export async function removePlant(plant: PlantProps):Promise<void> {
  const data = await AsyncStorage.getItem('@PlantManager:plants')
  const plants = data ? JSON.parse(data) as StoragePlantProps: {}

  await Notifications.cancelScheduledNotificationAsync(plants[plant.id].notificationId)

  delete plants[plant.id]

  await AsyncStorage.setItem('@PlantManager:plants', JSON.stringify(plants))
}