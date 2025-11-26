import { Image } from 'expo-image';
import { Alert, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, confirmPasswordReset } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { Link, router } from 'expo-router';
import DateTimePicker from "@react-native-community/datetimepicker";
import { db } from "../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, updateDoc } from "firebase/firestore";

export default function BookList() {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchBooks() {
        try{
            const q = query(collection(db, "books"));
            const snapshot = await getDocs(q);

            console.log(snapshot.docs)

            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setBooks(list)
        } catch(e) {
            console.log("Error fetching books: ", e);
        } finally {
            setLoading(false);
        }
    }

    async function updateBook(id: string, data: any) {
        try {
            const ref = doc(db, "books", id);
            await updateDoc(ref, data);

            alert("Book updated!");
            fetchBooks();
        } catch(e) {
            console.log("Error updating: ", e)
        }
    }

    async function deleteBook(id: string) {
        try {
            const ref = doc(db, "books", id);
            await deleteDoc(ref);

            alert("Book deleted!");
            fetchBooks();
        } catch(e) {
            console.log("Error deleting: ", e);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    if (loading) {
        return (
            <View style={styles.padding}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (books.length === 0) {
        return (
            <View style={styles.padding}>
                <Text>No books were found.</Text>
            </View>
        );
    }

    return (
        <View style={styles.body}>
            <View style={styles.title_container}>
                <Text style={styles.title}>
                    Books
                </Text>
            </View>

        <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={styles.list_box}
        >
            <Text style={styles.item_title}>
              {item.title}
            </Text>
            <Text style={{ opacity: 0.7 }}>Year: {item.year}</Text>
            <Text style={{ opacity: 0.7 }}>Pages: {item.numOfPages}</Text>

            <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
              <TouchableOpacity
                style={styles.edit_buttom}
                onPress={() =>
                  updateBook(item.id, { brand: "Updated" })
                }
              >
                <Text style={styles.button_title}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.delete_buttom}
                onPress={() => deleteBook(item.id)}
              >
                <Text style={styles.button_title}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
        <View style={styles.bottom_bar}>
            <Link href={'/home'} style={styles.signout_text}>Home</Link>
        </View>
    </View> 
    );
}

const styles = StyleSheet.create({
    padding: {
        padding: 20
    },

    body: {
        flex: 1,
        justifyContent: "flex-start", 
        alignItems: "center", 
        backgroundColor: "#D0F0F2"
    },

    nav_bar: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        margin: 20
    },

    icon: {
        width: "30%",
        height: "100%"
    },

    title_container: {
        height: "5%",
        width: "100%",
        margin: 20,
        padding: 30,
        justifyContent: "center"
    },

    title: {
        fontSize: 20,
        fontFamily: "Georgia"
    },

    input_box: {
        height: "5%",
        width: "70%",
        borderRadius: 5,
        margin: 10,
        backgroundColor: "#F5FDFF",
        padding: 10
    },

    list_box: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
    },

    item_title: {
        fontSize: 18, 
        fontWeight: "600"
    },

    edit_buttom: {
        backgroundColor: "#3498db",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },

    delete_buttom: {
        backgroundColor: "#e74c3c",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },

    button_title: {
        color: "#fff",
        fontWeight: "600"
    },

    text: {
        fontSize: 17,
        fontFamily: "Georgia"
    },

    text_link: {
        fontFamily: "Georgia",
        fontSize: 17,
        color: "#2B6C8F",
        margin: 20
    },

    bottom_bar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "10%"
    },

    signout_text: {
        fontFamily: "Georgia",
        fontSize: 17,
        color: "#2B6C8F"
    }
})
