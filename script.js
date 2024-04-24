
    // Function to load content based on button clicked
    function loadContent(buttonId) {
      const contentContainer = document.getElementById("content-container");

      let content = "";
      switch (buttonId) {
        case "1a":
          content = `import java.util.Scanner; 
public class Caesar_Encryption 
{ 
 public static void main(String[] args) throws Exception{ 
 Scanner sc = new Scanner(System.in); 
 System.out.print("Enter the message: "); 
 String msg = sc.nextLine(); 
 System.out.print("Enter the key: "); 
 int key = sc.nextInt(); 
 key=key%26; 
 for(int i=0;i<msg.length();i++){ 
 char ch = msg.charAt(i); 
 if(Character.isAlphabetic(ch)){ 
 int ascii = (int) ch; 
 int m = ascii + key; 
 if(ascii<=90 && ascii>=65){ 
 if(m>90) 
 m-=26; 
 else if(m<65) 
 m+=26; 
} else if (ascii <= 122 && ascii >= 97) {
if (m > 122)
 m -= 26;
else if (m < 97)
 m += 26;
}
ch = (char) m;
msg = msg.substring(0, i) + ch + msg.substring(i + 1);
}
}
System.out.println("Cipher Text: " + msg);
}
}`;
          break;
        case "1b":
          content = `import java.util.Scanner; 
public class Caesar_Encryption 
{ 
 public static void main(String[] args) throws Exception{ 
 Scanner sc = new Scanner(System.in); 
 System.out.print("Enter the message: "); 
 String msg = sc.nextLine(); 
 System.out.print("Enter the key: "); 
 int key = sc.nextInt(); 
 key=key%26; 
 for(int i=0;i<msg.length();i++){ 
 char ch = msg.charAt(i); 
 if(Character.isAlphabetic(ch)){ 
 int ascii = (int) ch; 
 int m = ascii + key; 
 if(ascii<=90 && ascii>=65){ 
 if(m>90) 
 m-=26; 
 else if(m<65) 
 m+=26; 
} else if (ascii <= 122 && ascii >= 97) {
if (m > 122)
 m -= 26;
else if (m < 97)
 m += 26;
}
ch = (char) m;
msg = msg.substring(0, i) + ch + msg.substring(i + 1);
}
}
System.out.println("Cipher Text: " + msg);
}
}`;
          break;
        case "1c":
          content = `import java.util.Scanner; 
public class Caesar_Encryption 
{ 
 public static void main(String[] args) throws Exception{ 
 Scanner sc = new Scanner(System.in); 
 System.out.print("Enter the message: "); 
 String msg = sc.nextLine(); 
 System.out.print("Enter the key: "); 
 int key = sc.nextInt(); 
 key=key%26; 
 for(int i=0;i<msg.length();i++){ 
 char ch = msg.charAt(i); 
 if(Character.isAlphabetic(ch)){ 
 int ascii = (int) ch; 
 int m = ascii + key; 
 if(ascii<=90 && ascii>=65){ 
 if(m>90) 
 m-=26; 
 else if(m<65) 
 m+=26; 
} else if (ascii <= 122 && ascii >= 97) {
if (m > 122)
 m -= 26;
else if (m < 97)
 m += 26;
}
ch = (char) m;
msg = msg.substring(0, i) + ch + msg.substring(i + 1);
}
}
System.out.println("Cipher Text: " + msg);
}
}`;
          break;
        case "2a":
          content = `import java.util.Scanner;
import java.awt.Point;

public class PlayE{
    static String parse(String str){
        str = str.toUpperCase();
        str = str.replaceAll("[^A-Z]","");
        str = str.replace("J","I");
        return str;
    }
    static boolean containsChar(String[][] table, char c){
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                if(table[i][j] != null && table[i][j].equals(Character.toString(c)))
                return true;
            }
        }
        return false;
    }
    static String[][] generatePlayFairTable(String key){
        String playfairKey = key+"ABCDEFGHIKLMNOPQRSTUVWXYZ";
        String[][] table = new String[5][5];
        int index = 0;
        for(char c : playfairKey.toCharArray()){
            if(!containsChar(table,c)){
                int row = index /5;
                int col = index % 5;
                table[row][col] = Character.toString(c);
                index++;
            }
        }
        return table;
    }
    static String adjustMessage(String message){
        StringBuilder adjMessage = new StringBuilder(message);
        for(int i=0;i<message.length()-1 ;i+=2){
            if(adjMessage.charAt(i) == adjMessage.charAt(i+1)){
                adjMessage.insert(i+1,"X");
            }
        }
         if(adjMessage.length() % 2 == 1){
                adjMessage.append("X");
            }
            return adjMessage.toString();
    }
    static String[] digraphs (String message){
        String[] digraphs = new String[message.length() /2];
        for(int i=0;i<digraphs.length;i++){
            digraphs[i] = message.charAt(2*i)+""+message.charAt(2*i+1);
        }
        return digraphs;
    }
    static Point getPoint(char ch,String[][] table){
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                if(table[i][j].equals(Character.toString(ch))){
                    return new Point(i,j);
                }
            }
        }
        return null;
    }
    static String encipherMessage(String[] digraphs, String[][] playFairTable){
        StringBuilder cipherText = new StringBuilder();
        for(String digraph : digraphs){
            char a = digraph.charAt(0);
            char b = digraph.charAt(1);

            Point A = getPoint(a,playFairTable);
            Point B = getPoint(b,playFairTable);

            int r1 = A.x;
            int c1 = A.y;
            int r2 = B.x;
            int c2 = B.y;

            if(r1 == r2){
                c1 = (c1+1)%5;
                c2 = (c2+1)%5;
            }
            else if(c1 == c2){
                r1 = (r1+1)%5;
                r2 = (r2+1)%5;
            }else{
                int temp = c1;
                c1 = c2;
                c2 = temp;
            }
            cipherText.append(playFairTable[r1][c1]).append(playFairTable[r2][c2]);
        }
        return cipherText.toString();
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the message");
        String msg = sc.nextLine();
        System.out.println("Enter the key");
        String key = sc.nextLine();
        msg = parse(msg);
        key = parse(key);
        String[][] playFairTable = generatePlayFairTable(key);
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                System.out.print(playFairTable[i][j]+" ");
            }
            System.out.println();
        }
        String adjMessage = adjustMessage(msg);
        String[] digraphs = digraphs(adjMessage);
        String cipherText = encipherMessage(digraphs,playFairTable);
        System.out.println("encryptedMessage :"+cipherText);
    }
} 
`;
          break;
        case "2b":
          content = `import java.util.Scanner;
import java.awt.Point;
public class PlayD {
    static String parse(String str){
        str = str.toUpperCase();
        str = str.replaceAll("[^A-Z]","");
        str = str.replace("J","I");
        return str;
    }
    static boolean containsChar(char c,String[][] table){
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                if(table[i][j]!=null && table[i][j].equals(Character.toString(c)))
                return true;
            }
        }
        return false;
    }
    static String[][] generatePlayFairTable (String key){
        String[][] table = new String[5][5];
        String initkey = key+"ABCDEFGHIKLMNOPQRSTUVWXYZ";
        int index = 0;
        for(char c : initkey.toCharArray()){
            if(!containsChar(c,table)){
                int row = index/5;
                int col = index%5;
                table[row][col] = Character.toString(c);
                index++;
            }
        }
        return table;
    }
    static String adjustMessage(String message){
        StringBuilder adjMessage = new StringBuilder(message);
        for(int i=0;i<message.length();i++){
            if(adjMessage.charAt(i) == adjMessage.charAt(i+1)){
                adjMessage.insert(i+1,"X");
            }
        }
        if(adjMessage.length() % 2 == 1)
        adjMessage.append("X");
        return adjMessage.toString();
    }
    static String[] digraphs(String message){
        String[] digraphs = new String[message.length()/2];
        for(int i=0;i<digraphs.length;i++){
            digraphs[i] = message.charAt(2*i)+""+message.charAt(2*i+1);
        }
        return digraphs;
    }
static Point getPoint(char ch,String[][] table){
    for(int i=0;i<5;i++){
        for(int j=0;j<5;j++){
            if(Character.toString(ch).equals(table[i][j]))
            return new Point(i,j);
        }
    }
    return null;
}
    static String decryptMessage(String message,String[][] table){
        StringBuilder plainText = new StringBuilder();
        for(int i=0;i<message.length()/2;i++){
            char a = message.charAt(2*i);
            char b = message.charAt(2*i+1);

            Point A = getPoint(a,table);
            Point B = getPoint(b,table);
            int r1 = A.x;
            int c1 = A.y;
            int r2 = B.x;
            int c2 = B.y;

            if(r1 == r2){
                c1 = (c1+4)%5;
                c2 = (c2+4)%5;
            }
            else if(c1 == c2){
                r1 = (r1+4)%5;
                r2 = (r2+4)%5;
            }else{
                int temp = c1;
                c1 = c2;
                c2 = temp;
            }
            plainText.append(table[r1][c1]).append(table[r2][c2]);
        }
        return plainText.toString();
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the message");
        String msg = sc.nextLine();
        System.out.println("Enter the key");
        String key = sc.nextLine();
        msg = parse(msg);
        key = parse(key);
        String[][] table = generatePlayFairTable(key);
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                System.out.print(table[i][j]+" ");
            }
            System.out.println();
        }
        // String adjMessage = adjustMessage(msg);
        // String[] digraphs = digraphs(adjMessage);
        String plainText = decryptMessage(msg,table);
        plainText = plainText.replace("X","");
        System.out.println("Decrypted Message :"+plainText);
    }
}
`;
          break;
        case "3a":
          content = `import java.util.Scanner;
public class VigE {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String msg = sc.nextLine().toUpperCase();
        String key = sc.nextLine().toUpperCase();
        String enc = "";
        char[][] table = new char[26][26];
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < 26; j++) {
                int ascii = i + j + 65;
                if (ascii > 90)
                    ascii -= 26;
                char te = (char) ascii;
                table[i][j] = te;
            }
        }
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < 26; j++) {
                System.out.print(table[i][j] + " ");
            }
            System.out.println("\n");
        }
        for (int i = 0; i < msg.length(); i++) {
            int p = msg.charAt(i);
            int k = key.charAt(i % key.length());
            int r = p - 65;
            int c = k - 65;
            char ci = table[r][c];
            enc += ci;
        }
        System.out.println(enc);
    }
}
`;
break;
        case "3b":
          content = `import java.util.Scanner;
public class VigD {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String msg = sc.nextLine().toUpperCase();
        String key = sc.nextLine().toUpperCase();
        String enc = "";
        char[][] table = new char[26][26];
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < 26; j++) {
                int ascii = i + j + 65;
                if (ascii > 90)
                    ascii -= 26;
                char te = (char) ascii;
                table[i][j] = te;
            }
        }
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < 26; j++) {
                System.out.print(table[i][j] + " ");
            }
            System.out.println("\n");
        }
        for (int i = 0; i < msg.length(); i++) {
            int k = key.charAt(i%key.length());
            int r = k -65;
            for(int j=0;j<26;j++){
                if(table[r][j] == msg.charAt(i)){
                    char pt = (char)(j+65);
                    enc+= pt;
                }
            }
        }
        System.out.println(enc);
    }
}
`;
          break;
        case "4a":
          content = ` import java.util.Scanner;
 public class RailE{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String msg = sc.nextLine();
        int key = sc.nextInt();
        char[][] matrix = new char[key][msg.length()];
        int row = 0,col =0;
        boolean down = false;
        for(int i=0;i<msg.length();i++){
            if(row == 0 || row == key-1){
                down = !down;
            }
            matrix[row][col++] = msg.charAt(i);
            if(down)
            row++;
            else 
            row--;
        }
        for(int i=0;i<key;i++){
            for(int j=0;j<msg.length();j++){
                if(matrix[i][j]!='\0')
                System.out.print(matrix[i][j]);
                else
                System.out.print(" ");
            }
                            System.out.println();

        }
        String enc = "";
        for(int i=0;i<key;i++){
            for(int j=0;j<msg.length();j++){
                enc+= matrix[i][j];
            }
        }
        System.out.println(enc);
    }
 }`;
          break;
        case "4b":
          content = `import java.util.*;
public class RailD {
    public static void main(String[] args) {
        int row = 0, col = 0;
        boolean down = false;
        Scanner sc = new Scanner(System.in);
        String msg = sc.nextLine();
        int key = sc.nextInt();
        char[][] matrix = new char[key][msg.length()];
        for (int i = 0; i < msg.length(); i++) {
            if (row == 0 || row == key - 1)
                down = !down;
            matrix[row][col++] = '*';
            if (down)
                row++;
            else
                row--;
        }
        int index = 0;
        for (int i = 0; i < key; i++) {
            for (int j = 0; j < msg.length(); j++) {
                if (matrix[i][j] == '*')
                    matrix[i][j] = msg.charAt(index++);
                else
                    matrix[i][j] = '\0';
                }
        }
        for (int i = 0; i < key; i++) {
            for (int j = 0; j < msg.length(); j++) {
                if (matrix[i][j] != '\0')
                    System.out.print(matrix[i][j]+" ");
                else 
            System.out.print(" ");
            }
            System.out.println();
        }
String dec="";
down = false;
row=0;
col=0;
        for(int i=0;i<msg.length();i++){
            if(row == 0 || row==key-1)
            down = !down;
            dec+=matrix[row][col++];
            if(down)
            row++;
            else
            row--;
        }
        System.out.println(dec);
    }
}
`;
          break;
        case "5":
          content = `import java.util.*;
import java.io.*;
public class Pass {
    public static boolean isValid(String password){
if(password.length() > 8){
System.out.println("The password must not be more than 8 characters");
return false;
}
if(password.length() < 6){
System.out.println("The password must be more than 6 characters");
return false;
}
int upCount =0,digitCount=0,specialCount=0;
char[] charArr = password.toCharArray();
for(char c: charArr){
if(Character.isUpperCase(c))
upCount++;
else if(Character.isDigit(c))
digitCount++;
else if(!Character.isLetterOrDigit(c))
specialCount++;
}
if (upCount == 0) {
    System.out.println("No upppercase characters");
    return false;
}
if (digitCount == 0) {
    System.out.println("No digits found");
    return false;
}
if (specialCount == 0) {
    System.out.println("No special characters");
    return false;
}
for(int i=0;i<password.length();i++){
for(int j=i+1;j<password.length() - 1;j++){
if(charArr[i] == charArr[j]){
System.out.println("Duplicate elements found");
return false;
}
}
}
int isUpper=0,isLower=0,isDigit=0,isSpecial=0;
for(int i=0;i<password.length();i++){
if(Character.isUpperCase(charArr[i])){
isUpper++;
if(isUpper == 3){
System.out.println("Consecutive uppercases");
return false;
}else
isUpper = 0;
}
if(Character.isLowerCase(charArr[i])){
isLower++;
if(isLower == 3){
System.out.println("Consecutive lowercases");
return false;
}else
isLower = 0;
}
if(Character.isDigit(charArr[i])){
isDigit++;
if(isDigit == 3){
System.out.println("Consecutive digits");
return false;
}else
isDigit = 0;
}
if(!Character.isLetterOrDigit(charArr[i])){
isSpecial++;
if(isSpecial == 3){
System.out.println("Consecutive special Characters");
return false;
}else
isSpecial = 0;
}
}
return true;
}
public static void main(String[] args){
File file = new File("pass.txt");
try{
Scanner sc = new Scanner(file);
while(sc.hasNextLine()){
String password = sc.nextLine().trim();
System.out.println("password :"+password);
if(isValid(password))
System.out.println("Pass is valid");
else
System.out.println("Pass is Invalid");
}
}catch(Exception e){
e.printStackTrace();
}
}
}

password.txt
Abc
Abca@23
SSS@r23
Abcdef@123
Abc@1
Abc@12

`;
break;
case "6":
    content = `import java.io.*;
import java.util.*;
import java.security.*;

public class PwdManager {
    public static List<String> readUserData() throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("input2.txt"));
        List<String> userData = new ArrayList<>();
        String line;
        while ((line = br.readLine()) != null) {
            userData.add(line);
        }
        return userData;
    }

    public static String hashPassword(String password) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hashInPass = md.digest(password.getBytes());
        StringBuilder sb = new StringBuilder();
        for (byte b : hashInPass) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }

    public static void writeUserData(List<String> userData) throws Exception {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("input2.txt"))) {
            for (String entry : userData)
                writer.write(entry + "\n");
        }
    }

    public static void regsiterUser(String userId, String password) throws Exception {
        List<String> userData = readUserData();
        for (String entry : userData) {
            String[] parts = entry.split(":");
            if (parts[0].equals(userId)) {
                System.out.println("User Id already exists");
                return;
            }   
        }
        String hashedPassword = hashPassword(password);
        String userDataEntry = userId + ":" + hashedPassword;
        userData.add(userDataEntry);
        writeUserData(userData);
        System.out.println("User added successfuly");
    }
    public static boolean authenticateUser(String userId,String password) throws Exception{
        List<String> userData = readUserData();
        for(String entry:userData){
            String parts[] = entry.split(":");
            if(userId.equals(parts[0])){
                String hashedPassString = hashPassword(password);
                System.out.println(hashedPassString);
                if(parts[1].equals(hashedPassString)){
                    System.out.println("Authentication success");
                    return true;
                }else{
                    System.out.println("Invalid password");
                    return false;
                }
            }
        }
        System.out.println("user Id not found");
        return false;
    }
    public static void main(String[] args) throws Exception{
        Scanner sc = new Scanner(System.in);
        while(true){
        int choice = sc.nextInt();
        sc.nextLine();
        switch(choice){
            case 1:
            String userId = sc.nextLine();
            String password = sc.nextLine();
            regsiterUser(userId, password);
            break;
            case 2:
             userId = sc.nextLine();
             password = sc.nextLine();
            authenticateUser(userId, password);
            break;
            case 3:
            System.exit(0);
        }
    }
    }

}
user_data.txt
01:ffbc0b7ec0d946ffd293bb1c4c40a5d195738c261798a91891051c7ed93bc18b
02:2da2d33ceeb01c0a1e3dd13ad7218d73b3f189be817cd5ba659bc6c010084c64
03:2da2d33ceeb01c0a1e3dd13ad7218d73b3f189be817cd5ba659bc6c010084c64

`;
break;
case "7":
    content=`Networking commands`;
          break;
        default:
          content = "Unknown content";
      }

      contentContainer.innerHTML = `<code><pre>${content}</pre></code>`;
    }
